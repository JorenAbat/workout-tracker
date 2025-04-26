const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Check if required environment variables are set
if (!process.env.LOGIN_USERNAME || !process.env.PASSWORD_HASH || !process.env.SESSION_SECRET) {
    console.error('Error: Required environment variables are not set. Please check your .env file');
    process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Determine if we're in production
const isProduction = process.env.NODE_ENV === 'production';

// Configure CORS based on environment
const corsOptions = {
    origin: isProduction ? 'https://workout.jorenabat.com' : 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: isProduction, // Set to true in production
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        sameSite: isProduction ? 'none' : 'lax' // Required for cross-site cookies in production
    }
}));

// Authentication middleware
const requireAuth = (req, res, next) => {
    if (req.session && req.session.authenticated) {
        return next();
    }
    // If the request is for an API endpoint, return 401 Unauthorized
    if (req.originalUrl.startsWith('/api/')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // Otherwise, redirect to login page
    res.redirect('/login.html');
};

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Login endpoint with more detailed error logging
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    
    console.log('Login attempt from:', req.headers.origin);
    console.log('Username provided:', username);
    console.log('Stored hash:', process.env.PASSWORD_HASH);
    console.log('Password length:', password.length);
    
    const storedHash = process.env.PASSWORD_HASH;
    const isValid = await bcrypt.compare(password, storedHash);
    
    // Log the comparison result in detail
    console.log('Password comparison details:', {
        storedHashLength: storedHash.length,
        storedHashPrefix: storedHash.substring(0, 10) + '...',
        isValid: isValid
    });
    
    if (username === process.env.LOGIN_USERNAME && isValid) {
        req.session.authenticated = true;
        req.session.username = username;
        console.log('Login successful for user:', username);
        res.json({ success: true });
    } else {
        console.log('Login failed - Username match:', username === process.env.LOGIN_USERNAME);
        console.log('Password valid:', isValid);
        res.status(401).json({ 
            message: 'Invalid username or password',
            details: isProduction ? undefined : {
                usernameMatch: username === process.env.LOGIN_USERNAME,
                passwordValid: isValid
            }
        });
    }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Check authentication status
app.get('/api/auth-status', (req, res) => {
    res.json({ authenticated: !!req.session.authenticated });
});

// Helper functions
function isWarmupOrCooldownExercise(exerciseName) {
    const lowerName = exerciseName.toLowerCase();
    return lowerName.includes('warmup') || 
           lowerName.includes('cooldown') ||
           lowerName.includes('stretch') ||
           lowerName.includes('breathing') ||
           lowerName.includes('circles') ||
           lowerName.includes('swings') ||
           lowerName.includes('marching');
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    if (err.code === 'ENOENT') {
        res.status(404).json({ error: 'Resource not found' });
    } else if (err.name === 'ValidationError') {
        res.status(400).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Data storage paths
const DATA_DIR = path.join(__dirname, 'data');
const WORKOUT_HISTORY_FILE = path.join(DATA_DIR, 'workout-history.json');
const EXERCISE_STATS_FILE = path.join(DATA_DIR, 'exercise-stats.json');
const PERSONAL_BESTS_FILE = path.join(DATA_DIR, 'personal-bests.json');

// Initialize empty database structure
const INITIAL_DB = {
    workoutHistory: {},
    exerciseStats: {},
    currentStreak: 0
};

// Ensure data directory exists and initialize files
async function initializeDatabase() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        
        // Initialize workout history file
        try {
            await fs.access(WORKOUT_HISTORY_FILE);
            console.log('Workout history file exists');
        } catch {
            console.log('Creating workout history file');
            await fs.writeFile(WORKOUT_HISTORY_FILE, JSON.stringify(INITIAL_DB, null, 2));
        }
        
        // Initialize exercise stats file
        try {
            await fs.access(EXERCISE_STATS_FILE);
            console.log('Exercise stats file exists');
        } catch {
            console.log('Creating exercise stats file');
            await fs.writeFile(EXERCISE_STATS_FILE, JSON.stringify({}, null, 2));
        }

        // Initialize personal bests file
        try {
            await fs.access(PERSONAL_BESTS_FILE);
            console.log('Personal bests file exists');
        } catch {
            console.log('Creating personal bests file');
            await fs.writeFile(PERSONAL_BESTS_FILE, JSON.stringify({}, null, 2));
        }
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
}

// Initialize database
initializeDatabase().then(() => {
    console.log('Database initialized successfully');
}).catch(error => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
});

// Protect all API routes
app.use('/api', requireAuth);

// API Endpoints

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Get workout history
app.get('/api/workout-history', async (req, res, next) => {
    try {
        const data = await fs.readFile(WORKOUT_HISTORY_FILE, 'utf8');
        const db = JSON.parse(data);
        res.json(db.workoutHistory || {});
    } catch (error) {
        console.error('Error reading workout history:', error);
        next(error);
    }
});

// Save workout
app.post('/api/save-workout', async (req, res, next) => {
    try {
        const { day, exercises, duration } = req.body;
        
        // Validate input
        if (!day || !exercises || !Array.isArray(exercises) || typeof duration !== 'number') {
            throw new Error('Invalid workout data');
        }
        
        const timestamp = new Date().toISOString();
        const date = timestamp.split('T')[0];

        // Read current database
        const data = await fs.readFile(WORKOUT_HISTORY_FILE, 'utf8');
        const db = JSON.parse(data);

        // Initialize date array if it doesn't exist
        if (!db.workoutHistory) {
            db.workoutHistory = {};
        }
        if (!db.workoutHistory[date]) {
            db.workoutHistory[date] = [];
        }

        // Add workout to history
        db.workoutHistory[date].push({
            day,
            exercises,
            duration,
            timestamp
        });

        // Update exercise stats
        if (!db.exerciseStats) {
            db.exerciseStats = {};
        }
        exercises.forEach(exercise => {
            if (!db.exerciseStats[exercise.name]) {
                db.exerciseStats[exercise.name] = {
                    totalSets: 0,
                    lastPerformed: date,
                    count: 0
                };
            }
            db.exerciseStats[exercise.name].totalSets += exercise.sets.length;
            db.exerciseStats[exercise.name].count++;
            db.exerciseStats[exercise.name].lastPerformed = date;
        });

        // Update personal bests
        try {
            let personalBests = {};
            try {
                const personalBestsData = await fs.readFile(PERSONAL_BESTS_FILE, 'utf8');
                personalBests = JSON.parse(personalBestsData);
            } catch (error) {
                if (error.code !== 'ENOENT') {
                    throw error;
                }
            }

            exercises.forEach(exercise => {
                if (isWarmupOrCooldownExercise(exercise.name)) {
                    return;
                }

                exercise.sets.forEach(set => {
                    if (set.reps && set.weight) {
                        const volume = set.reps * set.weight;
                        if (!personalBests[exercise.name] || volume > (personalBests[exercise.name].volume || 0)) {
                            personalBests[exercise.name] = {
                                reps: set.reps,
                                weight: set.weight,
                                volume: volume,
                                date: date
                            };
                        }
                    }
                });
            });

            await fs.writeFile(PERSONAL_BESTS_FILE, JSON.stringify(personalBests, null, 2));
        } catch (error) {
            console.error('Error updating personal bests:', error);
            // Don't fail the whole request if personal bests update fails
        }

        // Update streak
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (db.workoutHistory[yesterdayStr] && db.workoutHistory[yesterdayStr].length > 0) {
            db.currentStreak++;
        } else {
            db.currentStreak = 1;
        }

        // Save updated database
        await fs.writeFile(WORKOUT_HISTORY_FILE, JSON.stringify(db, null, 2));
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
});

// Get current streak
app.get('/api/current-streak', async (req, res, next) => {
    try {
        const data = await fs.readFile(WORKOUT_HISTORY_FILE, 'utf8');
        const db = JSON.parse(data);
        res.json({ streak: db.currentStreak || 0 });
    } catch (error) {
        console.error('Error calculating streak:', error);
        next(error);
    }
});

// Get exercise stats
app.get('/api/exercise-stats/:exercise', async (req, res, next) => {
    try {
        const exercise = decodeURIComponent(req.params.exercise);
        const data = await fs.readFile(WORKOUT_HISTORY_FILE, 'utf8');
        const db = JSON.parse(data);
        res.json(db.exerciseStats?.[exercise] || null);
    } catch (error) {
        console.error('Error getting exercise stats:', error);
        next(error);
    }
});

// Get personal best for an exercise
app.get('/api/personal-best/:exercise', async (req, res, next) => {
    try {
        const exercise = decodeURIComponent(req.params.exercise);
        
        // Check if this is a warmup/cooldown exercise (which don't have personal bests)
        const isWarmupOrCooldown = exercise.toLowerCase().includes('warmup') || 
                                  exercise.toLowerCase().includes('cooldown') ||
                                  exercise.toLowerCase().includes('stretch') ||
                                  exercise.toLowerCase().includes('breathing') ||
                                  exercise.toLowerCase().includes('circles') ||
                                  exercise.toLowerCase().includes('swings') ||
                                  exercise.toLowerCase().includes('marching');
        
        if (isWarmupOrCooldown) {
            return res.json(null);
        }

        try {
            const data = await fs.readFile(PERSONAL_BESTS_FILE, 'utf8');
            const personalBests = JSON.parse(data);
            
            // If the file exists but is empty or doesn't have the exercise
            if (!personalBests || typeof personalBests !== 'object') {
                return res.json(null);
            }
            
            // Return the personal best if it exists, otherwise null
            return res.json(personalBests[exercise] || null);
        } catch (error) {
            // If file doesn't exist or can't be read, return null
            if (error.code === 'ENOENT') {
                return res.json(null);
            }
            throw error;
        }
    } catch (error) {
        console.error('Error getting personal best:', error);
        next(error);
    }
});

// Get all personal bests
app.get('/api/personal-bests', async (req, res, next) => {
    try {
        try {
            const data = await fs.readFile(PERSONAL_BESTS_FILE, 'utf8');
            const personalBests = JSON.parse(data);
            
            // If the file exists but is empty
            if (!personalBests || typeof personalBests !== 'object') {
                return res.json({});
            }
            
            // Return all personal bests
            return res.json(personalBests);
        } catch (error) {
            // If file doesn't exist or can't be read, return empty object
            if (error.code === 'ENOENT') {
                return res.json({});
            }
            throw error;
        }
    } catch (error) {
        console.error('Error getting personal bests:', error);
        next(error);
    }
});

// Reset database endpoint
app.post('/api/reset-database', async (req, res, next) => {
    try {
        // Delete all data files
        const filesToDelete = [
            WORKOUT_HISTORY_FILE,
            EXERCISE_STATS_FILE,
            PERSONAL_BESTS_FILE
        ];

        for (const file of filesToDelete) {
            try {
                await fs.unlink(file);
                console.log(`Deleted file: ${file}`);
            } catch (error) {
                if (error.code !== 'ENOENT') { // Ignore if file doesn't exist
                    throw error;
                }
            }
        }

        // Reinitialize the database
        await initializeDatabase();
        
        res.json({
            success: true,
            message: 'Database reset successfully',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error resetting database:', error);
        next(error);
    }
});

// Start server with error handling
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (error) => {
    console.error('Server error:', error);
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please stop any other servers and try again.`);
    }
    process.exit(1);
});

// Handle process termination
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

console.log('Full env PASSWORD_HASH:', JSON.stringify(process.env.PASSWORD_HASH));
console.log('Length:', process.env.PASSWORD_HASH.length); 