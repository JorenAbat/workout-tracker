// API Configuration
const API_BASE_URL = window.location.origin + '/api';

// Workout data
const workoutData = {
    monday: {
        title: "Upper Body Workout",
        category: "upper",
        warmup: [
            "Arm circles (30 seconds forward, 30 seconds backward)",
            "Shoulder shrugs (30 seconds)",
            "Light dumbbell front raises (10 reps)",
            "Torso twists (1 minute)",
            "Jumping jacks or high knees (1 minute)"
        ],
        exercises: [
            {
                name: "Dumbbell Bicep Curl",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "10-12",
                instructions: "Stand with feet shoulder-width apart, hold dumbbells at sides with palms facing forward, curl weights up toward shoulders, lower back down with control"
            },
            {
                name: "Dumbbell Hammer Curl",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "10-12",
                instructions: "Similar to regular curl but with palms facing each other, curl weights up while maintaining neutral grip"
            },
            {
                name: "Kettlebell Row",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "10-12 per arm",
                instructions: "Bend forward at hips, keep back straight, pull kettlebell toward hip, alternate arms"
            },
            {
                name: "Dumbbell Shoulder Press",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-10",
                instructions: "Start with weights at shoulder level, press overhead until arms are straight, lower back to shoulders"
            },
            {
                name: "Dumbbell Lateral Raise",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-12",
                instructions: "Stand with weights at sides, raise arms out to sides until parallel to ground, lower with control"
            }
        ],
        cooldown: [
            "Hamstring stretch (20-30 seconds per leg)",
            "Glute stretch (20-30 seconds per side)",
            "Shoulder stretch (20-30 seconds per side)",
            "Cat-Cow stretch (1 minute)",
            "Deep breathing (1 minute)"
        ]
    },
    tuesday: {
        title: "Lower Body Workout",
        category: "lower",
        warmup: [
            "Bodyweight squats (10 reps)",
            "Hip circles (30 seconds per direction)",
            "Forward and backward leg swings (30 seconds per leg)",
            "Glute bridges (10 reps)",
            "High knees or marching in place (1 minute)"
        ],
        exercises: [
            {
                name: "Dumbbell Goblet Squat",
                equipment: "1 x 7.5kg dumbbell",
                sets: "3",
                reps: "10-12",
                instructions: "Hold dumbbell at chest level, squat down until thighs are parallel, stand back up"
            },
            {
                name: "Dumbbell Romanian Deadlift",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-10",
                instructions: "Stand with feet hip-width apart, hinge at hips, keeping back straight, lower weights along legs"
            },
            {
                name: "Kettlebell Swing",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "15-20",
                instructions: "Hinge at hips, swing kettlebell between legs, drive hips forward to swing up"
            },
            {
                name: "Dumbbell Step Back Lunge",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-10 per leg",
                instructions: "Step back with one leg, lower back knee toward ground, push off back foot to return"
            },
            {
                name: "Kettlebell Sumo Squat",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "10-12",
                instructions: "Stand with wide stance, hold kettlebell between legs, squat down, stand back up"
            }
        ],
        cooldown: [
            "Hamstring stretch (20-30 seconds per leg)",
            "Glute stretch (20-30 seconds per side)",
            "Quad stretch (20-30 seconds per leg)",
            "Cat-Cow stretch (1 minute)",
            "Deep breathing (1 minute)"
        ]
    },
    thursday: {
        title: "Core & Conditioning Workout",
        category: "core",
        warmup: [
            "Torso twists (1 minute)",
            "Arm circles (30 seconds forward, 30 seconds backward)",
            "Hip circles (30 seconds per direction)",
            "Standing knee-to-elbow crunches (1 minute)",
            "Light kettlebell swings (10 reps)"
        ],
        exercises: [
            {
                name: "Kettlebell Halo",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "10 each direction",
                instructions: "Hold kettlebell by horns, circle around head, alternate directions"
            },
            {
                name: "Dumbbell Side Bends",
                equipment: "1 x 7.5kg dumbbell",
                sets: "3",
                reps: "10-12 per side",
                instructions: "Stand with weight in one hand, bend to opposite side, return to center"
            },
            {
                name: "Kettlebell Figure-Eights",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "10-12",
                instructions: "Stand with feet shoulder-width, move kettlebell in figure-8 pattern, keep core engaged"
            },
            {
                name: "Kettlebell Goblet March",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "12 per side",
                instructions: "Hold kettlebell at chest, march in place, lift knees high"
            },
            {
                name: "Dumbbell Russian Twists",
                equipment: "1 x 7.5kg dumbbell",
                sets: "3",
                reps: "12 per side",
                instructions: "Sit with knees bent, hold weight at chest, twist side to side"
            }
        ],
        cooldown: [
            "Hamstring stretch (20-30 seconds per leg)",
            "Glute stretch (20-30 seconds per side)",
            "Shoulder stretch (20-30 seconds per side)",
            "Cat-Cow stretch (1 minute)",
            "Deep breathing (1 minute)"
        ]
    },
    friday: {
        title: "Full Body Workout",
        category: "full",
        warmup: [
            "Arm circles (30 seconds forward, 30 seconds backward)",
            "Hip circles (30 seconds per direction)",
            "Bodyweight squats (10 reps)",
            "Standing knee-to-elbow crunches (1 minute)",
            "Light kettlebell swings (10 reps)"
        ],
        exercises: [
            {
                name: "Dumbbell Squat Press",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-10",
                instructions: "Squat down, press weights overhead, lower weights, stand up"
            },
            {
                name: "Kettlebell Clean and Press",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "8-10 per side",
                instructions: "Clean kettlebell to shoulder, press overhead, lower with control"
            },
            {
                name: "Dumbbell Deadlift",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-10",
                instructions: "Hinge at hips, lower weights along legs, return to standing"
            },
            {
                name: "Kettlebell Goblet Reverse Lunge",
                equipment: "9kg kettlebell",
                sets: "3",
                reps: "12 per leg",
                instructions: "Hold kettlebell at chest, step back with one leg, lower back knee"
            },
            {
                name: "Dumbbell Renegade Row",
                equipment: "2 x 7.5kg dumbbells",
                sets: "3",
                reps: "8-10 per arm",
                instructions: "Get in plank position, hold dumbbells, row one arm at a time"
            }
        ],
        cooldown: [
            "Hamstring stretch (20-30 seconds per leg)",
            "Glute stretch (20-30 seconds per side)",
            "Shoulder stretch (20-30 seconds per side)",
            "Cat-Cow stretch (1 minute)",
            "Deep breathing (1 minute)"
        ]
    }
};

// DOM Elements
const modal = document.getElementById('workout-modal');
const closeBtn = document.querySelector('.close');
const workoutTitle = document.getElementById('workout-title');
const warmupList = document.getElementById('warmup-list');
const exercisesList = document.getElementById('exercises-list');
const cooldownList = document.getElementById('cooldown-list');
const timerDisplay = document.getElementById('timer');
const filterBtns = document.querySelectorAll('.filter-btn');
const exerciseGrid = document.querySelector('.exercise-grid');

// Timer variables
let timer;
let timeLeft;
let isTimerRunning = false;

// Progress tracking
let completedWorkouts = JSON.parse(localStorage.getItem('completedWorkouts')) || {};
// Convert any old format data to new format
Object.keys(completedWorkouts).forEach(date => {
    if (typeof completedWorkouts[date] === 'boolean') {
        completedWorkouts[date] = [];
    }
});
let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
updateProgress();

// Progress tracking data structures
let workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || {};
let exerciseStats = JSON.parse(localStorage.getItem('exerciseStats')) || {};
let personalBests = JSON.parse(localStorage.getItem('personalBests')) || {};

// Standardized API call functions
async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function postData(endpoint, data) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

// Event Listeners
document.querySelectorAll('.start-workout').forEach(button => {
    button.addEventListener('click', () => {
        const day = button.parentElement.dataset.day;
        openWorkoutModal(day);
    });
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterExercises(btn.dataset.filter);
    });
});

// Functions
function openWorkoutModal(day) {
    const workout = workoutData[day];
    
    // Create the modal content structure as a single card layout
    const modalContent = `
        <div class="workout-card-modal">
            <span class="close">&times;</span>
            <div class="workout-modal-header">
                <div class="workout-modal-timer">
                    <span id="timer">60:00</span>
                </div>
                <div class="timer-controls">
                    <button class="timer-btn start-timer" onclick="startTimer()">Start</button>
                    <button class="timer-btn pause-timer" onclick="pauseTimer()">Pause</button>
                    <button class="timer-btn reset-timer" onclick="resetTimer()">Reset</button>
                </div>
            </div>
            <div class="workout-modal-weights">
                <label>Dumbbell (kg)
                    <input type="number" id="dumbbell-weight" min="0" step="0.5" value="7.5">
                </label>
                <label>Kettlebell (kg)
                    <input type="number" id="kettlebell-weight" min="0" step="0.5" value="9">
                </label>
            </div>
            <div class="workout-modal-section">
                <div class="workout-section-header">Warm-Up</div>
                <ul class="workout-list" id="warmup-list">
                    ${workout.warmup.map(item => `
                        <li class="workout-list-item">
                            <label class="exercise-check">
                                <input type="checkbox" onchange="toggleExercise(this)">
                            </label>
                            <span class="workout-text">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="workout-modal-section">
                <div class="workout-section-header">Main Exercises</div>
                <ul class="workout-list" id="exercises-list">
                    ${workout.exercises.map((exercise, index) => {
                        const equipment = exercise.equipment;
                        const weight = equipment.includes('dumbbell') ? 'dumbbell-weight' : 
                                     equipment.includes('kettlebell') ? 'kettlebell-weight' : null;
                        return `
                        <li class="workout-list-item main-exercise-item">
                            <label class="exercise-check">
                                <input type="checkbox" onchange="toggleExercise(this)">
                            </label>
                            <div class="exercise-content">
                                <div class="exercise-details">
                                    <strong>${exercise.name}</strong>
                                    <div class="exercise-meta">${exercise.equipment} &bull; ${exercise.sets} sets &bull; ${exercise.reps} reps</div>
                                    <div class="exercise-instructions">${exercise.instructions}</div>
                                    <div class="sets-tracking">
                                        <div class="sets-counter" data-exercise="${index}">
                                            ${Array.from({ length: parseInt(exercise.sets) }, (_, i) => `
                                                <div class="set-container">
                                                    <button class="set-btn" onclick="toggleSet(this)" data-set="${i + 1}">Set ${i + 1}</button>
                                                    <div class="rep-input">
                                                        <input type="number" class="actual-reps" placeholder="Reps" min="0">
                                                        ${weight ? `<div class="weight-display">Weight: <span class="weight-value" data-weight-type="${weight}">${weight === 'dumbbell-weight' ? '7.5' : '9'}kg</span></div>` : ''}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        `;
                    }).join('')}
                </ul>
            </div>
            <div class="workout-modal-section">
                <div class="workout-section-header">Cool-Down</div>
                <ul class="workout-list" id="cooldown-list">
                    ${workout.cooldown.map(item => `
                        <li class="workout-list-item">
                            <label class="exercise-check">
                                <input type="checkbox" onchange="toggleExercise(this)">
                            </label>
                            <span class="workout-text">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="end-workout-container">
                <button class="end-workout-btn" onclick="endWorkout('${day}')">Complete Workout</button>
            </div>
        </div>
    `;
    modal.innerHTML = modalContent;
    modal.style.display = 'block';

    // Add event listeners for weight inputs
    const dumbbellWeightInput = document.getElementById('dumbbell-weight');
    const kettlebellWeightInput = document.getElementById('kettlebell-weight');

    function updateWeights() {
        const dumbbellWeight = dumbbellWeightInput.value;
        const kettlebellWeight = kettlebellWeightInput.value;
        document.querySelectorAll('.weight-value[data-weight-type="dumbbell-weight"]').forEach(el => {
            el.textContent = `${dumbbellWeight}kg`;
        });
        document.querySelectorAll('.weight-value[data-weight-type="kettlebell-weight"]').forEach(el => {
            el.textContent = `${kettlebellWeight}kg`;
        });
    }
    dumbbellWeightInput.addEventListener('change', updateWeights);
    kettlebellWeightInput.addEventListener('change', updateWeights);

    timeLeft = 3600; // 1 hour in seconds
    updateTimerDisplay();
    // Update button state based on completion
    const today = new Date().toISOString().split('T')[0];
    const endWorkoutBtn = document.querySelector('.end-workout-btn');
    if (completedWorkouts[today]?.includes(day)) {
        endWorkoutBtn.disabled = true;
        endWorkoutBtn.textContent = 'Workout Completed';
    }
}

function closeModal() {
    modal.style.display = 'none';
    stopTimer();
    
    // Check if all exercises are completed
    const allCheckboxes = modal.querySelectorAll('input[type="checkbox"]');
    const totalChecked = Array.from(allCheckboxes).filter(cb => cb.checked).length;
    
    if (totalChecked === allCheckboxes.length) {
        const today = new Date().toISOString().split('T')[0];
        if (!completedWorkouts[today]) {
            completedWorkouts[today] = [];
        }
        const currentDay = modal.querySelector('.end-workout-btn').getAttribute('onclick').match(/'(\w+)'/)[1];
        if (!completedWorkouts[today].includes(currentDay)) {
            completedWorkouts[today].push(currentDay);
            localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
            updateProgress();
        }
    }
}

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        // Set the start time when timer starts
        document.getElementById('timer').dataset.startTime = Date.now();
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                stopTimer();
                alert('Workout completed! Great job!');
            }
        }, 1000);
        document.querySelector('.start-timer').textContent = 'Pause';
    } else {
        pauseTimer();
    }
}

function pauseTimer() {
    stopTimer();
    document.querySelector('.start-timer').textContent = 'Resume';
}

function resetTimer() {
    stopTimer();
    timeLeft = 3600;
    updateTimerDisplay();
    document.querySelector('.start-timer').textContent = 'Start';
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timer);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleExercise(checkbox) {
    const listItem = checkbox.closest('li');
    const setsButtons = listItem.querySelectorAll('.set-btn');
    
    if (checkbox.checked) {
        listItem.classList.add('completed');
        // Mark all sets as completed
        setsButtons.forEach(btn => btn.classList.add('completed-set'));
    } else {
        listItem.classList.remove('completed');
        // Unmark all sets
        setsButtons.forEach(btn => btn.classList.remove('completed-set'));
    }
}

function toggleSet(button) {
    button.classList.toggle('completed-set');
    
    // Check if all sets for this exercise are completed
    const setsCounter = button.closest('.sets-counter');
    const allSets = setsCounter.querySelectorAll('.set-btn');
    const completedSets = setsCounter.querySelectorAll('.completed-set');
    
    // If all sets are completed, check the exercise checkbox
    const exerciseItem = button.closest('li');
    const checkbox = exerciseItem.querySelector('input[type="checkbox"]');
    
    if (completedSets.length === allSets.length) {
        checkbox.checked = true;
        exerciseItem.classList.add('completed');
    } else {
        checkbox.checked = false;
        exerciseItem.classList.remove('completed');
    }
}

async function updateProgress() {
    try {
        const [weeklyStats, monthlyStats, currentStreak] = await Promise.all([
            getWeeklyStats(),
            getMonthlyStats(),
            fetchData('/current-streak')
        ]);
    
    // Update weekly completion
    const weeklyProgress = document.querySelector('.progress-card:first-child .progress');
    const weeklyText = document.querySelector('.progress-card:first-child p');
        const progressPercentage = (weeklyStats.completed / weeklyStats.total) * 100;
    weeklyProgress.style.width = `${progressPercentage}%`;
        weeklyText.textContent = `${weeklyStats.completed}/${weeklyStats.total} workouts completed`;
    
    // Update streak
    const streakCount = document.querySelector('.streak-count');
    streakCount.textContent = `${currentStreak.streak} days`;
    
    // Update monthly stats
    const monthlyProgress = document.querySelector('.progress-card:nth-child(2) .progress');
    const monthlyText = document.querySelector('.progress-card:nth-child(2) p');
    const monthlyPercentage = (monthlyStats.completed / 20) * 100;
    monthlyProgress.style.width = `${monthlyPercentage}%`;
    monthlyText.textContent = `${monthlyStats.completed} workouts completed this month`;
    
    // Update schedule view
    updateScheduleView();
    } catch (error) {
        console.error('Error updating progress:', error);
        alert('Error updating progress. Please try again.');
    }
}

function updateScheduleView() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('.day-card').forEach(card => {
        const day = card.dataset.day;
        if (day && completedWorkouts[today] && Array.isArray(completedWorkouts[today]) && completedWorkouts[today].includes(day)) {
            card.classList.add('completed-workout');
        } else {
            card.classList.remove('completed-workout');
        }
    });
}

function getExerciseCategory(workoutTitle) {
    if (workoutTitle.includes('Upper')) return 'upper';
    if (workoutTitle.includes('Lower')) return 'lower';
    if (workoutTitle.includes('Core')) return 'core';
    if (workoutTitle.includes('Full')) return 'full';
    return 'all';
}

function filterExercises(filter) {
    let filteredExercises = [];
    
    // Get all exercises from all workouts
    Object.values(workoutData).forEach(workout => {
        workout.exercises.forEach(exercise => {
            filteredExercises.push({
                ...exercise,
                workoutDay: workout.title,
                category: workout.category
            });
        });
    });

    // Apply filter
    if (filter !== 'all') {
        filteredExercises = filteredExercises.filter(exercise => {
            return exercise.category === filter;
        });
    }

    displayExercises(filteredExercises);
}

function displayExercises(exercises) {
    exerciseGrid.innerHTML = '';
    
    exercises.forEach(exercise => {
        const exerciseCard = document.createElement('div');
        exerciseCard.className = 'exercise-card';
        
        exerciseCard.innerHTML = `
            <h3>${exercise.name}</h3>
            <p><strong>Workout:</strong> ${exercise.workoutDay}</p>
            <p><strong>Equipment:</strong> ${exercise.equipment}</p>
            <p><strong>Sets:</strong> ${exercise.sets}</p>
            <p><strong>Reps:</strong> ${exercise.reps}</p>
            <p><strong>Instructions:</strong> ${exercise.instructions}</p>
            <button onclick="viewExerciseStats('${exercise.name}')">View Stats</button>
        `;
        
        exerciseGrid.appendChild(exerciseCard);
    });
}

function viewExerciseStats(exerciseName) {
    const stats = exerciseStats[exerciseName] || [];
    const personalBest = personalBests[exerciseName];
    
    const statsModal = document.createElement('div');
    statsModal.className = 'stats-modal';
    statsModal.innerHTML = `
        <div class="stats-modal-content">
            <span class="close-stats">&times;</span>
            <h2>${exerciseName} Progress</h2>
            ${personalBest ? `
                <div class="personal-best">
                    <h3>Personal Best</h3>
                    <p>Sets: ${personalBest.sets}</p>
                    <p>Reps: ${personalBest.reps}</p>
                    <p>Date: ${new Date(personalBest.date).toLocaleDateString()}</p>
                </div>
            ` : ''}
            <div class="exercise-history">
                <h3>History</h3>
                ${stats.length > 0 ? stats.map(stat => `
                    <div class="history-item">
                        <span class="date">${new Date(stat.date).toLocaleDateString()}</span>
                        <span class="sets">${stat.sets} sets</span>
                        <span class="reps">${stat.reps} reps</span>
                    </div>
                `).join('') : '<p>No history available</p>'}
            </div>
        </div>
    `;
    
    document.body.appendChild(statsModal);
    
    // Add event listener for closing the modal
    const closeBtn = statsModal.querySelector('.close-stats');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(statsModal);
    });
}

async function endWorkout(day) {
        const completedExercises = [];
        
    // Get all completed exercises from the exercises list
    const exerciseItems = document.querySelectorAll('#exercises-list li');
    
    // Get the workout data for this day
    const workoutDayData = workoutData[day.toLowerCase()];
    
    // Add completed warm-up exercises
        document.querySelectorAll('#warmup-list input[type="checkbox"]:checked').forEach(checkbox => {
        const exerciseName = checkbox.closest('li').querySelector('.workout-text').textContent;
            completedExercises.push({
            name: exerciseName,
            sets: [{ reps: 1, weight: 0 }], // Track as one set
            type: 'warmup'
            });
        });

    // Add completed main exercises
    exerciseItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            const exerciseName = item.querySelector('.exercise-details strong').textContent;
            const setsCounter = item.querySelector('.sets-counter');
            const completedSets = [];
            
            setsCounter.querySelectorAll('.set-btn.completed-set').forEach(setBtn => {
                const repInput = setBtn.nextElementSibling.querySelector('.actual-reps');
                const reps = repInput ? parseInt(repInput.value) || 0 : 0;
                
                const weightDisplay = setBtn.nextElementSibling.querySelector('.weight-value');
                const weight = weightDisplay ? parseFloat(weightDisplay.textContent) || 0 : 0;
                
                completedSets.push({
                    weight: weight,
                    reps: reps
                });
            });
            
            if (completedSets.length > 0) {
            completedExercises.push({
                name: exerciseName,
                    sets: completedSets,
                    type: 'main'
            });
            }
        }
        });

    // Add completed cool-down exercises
        document.querySelectorAll('#cooldown-list input[type="checkbox"]:checked').forEach(checkbox => {
        const exerciseName = checkbox.closest('li').querySelector('.workout-text').textContent;
            completedExercises.push({
            name: exerciseName,
            sets: [{ reps: 1, weight: 0 }], // Track as one set
            type: 'cooldown'
            });
        });

    if (completedExercises.length > 0) {
        const startTime = new Date(parseInt(document.getElementById('timer').dataset.startTime));
        const endTime = new Date();
        const duration = Math.round((endTime - startTime) / 1000 / 60); // Duration in minutes

        const workoutData = {
            day: day,
            exercises: completedExercises,
            duration: duration,
            timestamp: new Date().toISOString()
        };

        try {
            const data = await postData('/save-workout', workoutData);
            
            if (data.success) {
                alert('Workout saved successfully!');
                closeModal();
                await updateProgress();
            } else {
                alert('Error saving workout: ' + data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving workout. Please try again.');
        }
    } else {
        alert('No completed exercises to save.');
    }
}

function resetWorkoutInterface() {
    // Stop the timer
    stopTimer();
    
    // Reset the timer display
    timeLeft = 3600;
    updateTimerDisplay();
    
    // Reset all checkboxes and sets
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll('.set-btn').forEach(btn => {
        btn.classList.remove('completed-set');
    });
    
    // Reset rep inputs
    document.querySelectorAll('.actual-reps').forEach(input => {
        input.value = '';
    });
    
    // Reset global weights to default values
    document.getElementById('dumbbell-weight').value = '7.5';
    document.getElementById('kettlebell-weight').value = '9';

    // Update the weight displays
    const dumbbellWeight = document.getElementById('dumbbell-weight').value;
    const kettlebellWeight = document.getElementById('kettlebell-weight').value;
    
    document.querySelectorAll('.weight-value[data-weight-type="dumbbell-weight"]').forEach(el => {
        el.textContent = `${dumbbellWeight}kg`;
    });
    document.querySelectorAll('.weight-value[data-weight-type="kettlebell-weight"]').forEach(el => {
        el.textContent = `${kettlebellWeight}kg`;
    });
}

// Function to update streak
async function updateStreak() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    const workoutHistory = await fetchData('/workout-history');
    if (workoutHistory[yesterdayStr]) {
        currentStreak++;
    } else {
        currentStreak = 1;
    }
    
    return currentStreak;
}

// Function to get weekly stats
async function getWeeklyStats() {
    try {
        const history = await fetchData('/workout-history');
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay()); // Start of current week (Sunday)
        weekStart.setHours(0, 0, 0, 0);
        
        let completed = 0;

        // Count workouts in the current week
        Object.entries(history).forEach(([date, workouts]) => {
            const workoutDate = new Date(date);
            if (workoutDate >= weekStart && workoutDate <= today) {
                completed += workouts.length;
            }
        });

        return {
            completed: completed,
            total: 5 // Target is 5 workouts per week
        };
    } catch (error) {
        console.error('Error getting weekly stats:', error);
        return { completed: 0, total: 5 };
    }
}

// Function to get monthly stats
async function getMonthlyStats() {
    const workoutHistory = await fetchData('/workout-history');
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    
    let completedCount = 0;
    let totalDuration = 0;
    
    for (let i = 0; i < today.getDate(); i++) {
        const date = new Date(monthStart);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        
        if (workoutHistory[dateStr]) {
            completedCount += workoutHistory[dateStr].length;
            workoutHistory[dateStr].forEach(workout => {
                totalDuration += workout.duration;
            });
        }
    }
    
    return {
        completed: completedCount,
        totalDuration: totalDuration
    };
}

// Function to display exercise history
async function displayExerciseHistory() {
    try {
        const historyContainer = document.getElementById('exercise-history');
        historyContainer.innerHTML = '';

        const workoutHistory = await fetchData('/workout-history');
        const allExercises = new Set();
        
        // Sort workouts by date (newest first)
        const sortedDates = Object.keys(workoutHistory).sort((a, b) => new Date(b) - new Date(a));
        
        // Get all unique exercises
        sortedDates.forEach(date => {
            workoutHistory[date].forEach(workout => {
                workout.exercises.forEach(exercise => {
                    allExercises.add(exercise.name);
                });
            });
        });

        const historyPromises = Array.from(allExercises).map(async exerciseName => {
            try {
                const stats = await fetchData(`/exercise-stats/${exerciseName}`);
                if (stats) {
                    const historyItem = document.createElement('div');
                    historyItem.className = 'exercise-history-item';
                    
                    historyItem.innerHTML = `
                        <div class="exercise-info">
                            <h4>${exerciseName}</h4>
                            <span class="date">Last performed: ${new Date(stats.lastPerformed).toLocaleDateString()}</span>
                        </div>
                        <div class="stats">
                            <span>Total Sets: ${stats.totalSets || 0}</span>
                            <span>Times Performed: ${stats.count || 0}</span>
                        </div>
                `;
                    historyContainer.appendChild(historyItem);
                }
            } catch (error) {
                console.warn(`Error getting stats for ${exerciseName}:`, error);
            }
        });

        await Promise.all(historyPromises);
    } catch (error) {
        console.error('Error displaying exercise history:', error);
    }
}

// Initialize exercise display
document.addEventListener('DOMContentLoaded', async () => {
    await updateProgress();
    await displayExerciseProgress();
    filterExercises('all');
});

async function loadExerciseStats() {
    try {
        const history = await fetchData('/workout-history');
        const exerciseList = document.getElementById('exerciseList');
        exerciseList.innerHTML = '';

        // Collect all exercises and their stats
        const exerciseStats = {};
        Object.entries(history).forEach(([date, workouts]) => {
            workouts.forEach(workout => {
                workout.exercises.forEach(exercise => {
                    if (!exerciseStats[exercise.name]) {
                        exerciseStats[exercise.name] = {
                            totalSets: 0,
                            lastPerformed: date,
                            count: 0,
                            latestReps: 0,
                            latestWeight: 0,
                            personalBest: 0
                        };
                    }
                    
                    // Update latest reps and weight
                    exercise.sets.forEach(set => {
                        if (set.reps && set.weight) {
                            const volume = set.reps * set.weight;
                            if (volume > exerciseStats[exercise.name].personalBest) {
                                exerciseStats[exercise.name].personalBest = volume;
                            }
                            exerciseStats[exercise.name].latestReps = set.reps;
                            exerciseStats[exercise.name].latestWeight = set.weight;
                        }
                    });

                    exerciseStats[exercise.name].totalSets += exercise.sets.length;
                    exerciseStats[exercise.name].count++;
                    if (date > exerciseStats[exercise.name].lastPerformed) {
                        exerciseStats[exercise.name].lastPerformed = date;
                    }
                });
            });
        });

        // Display exercise stats
        Object.entries(exerciseStats).forEach(([name, stats]) => {
            const exerciseItem = document.createElement('div');
            exerciseItem.className = 'exercise-item';
            exerciseItem.innerHTML = `
                <h4>${name}</h4>
                <p>Total Sets: ${stats.totalSets}</p>
                <p>Times Performed: ${stats.count}</p>
                <p>Last Performed: ${new Date(stats.lastPerformed).toLocaleDateString()}</p>
                <p>Latest: ${stats.latestReps} reps @ ${stats.latestWeight}kg</p>
                <p>Personal Best: ${stats.personalBest}kg total volume</p>
            `;
            exerciseList.appendChild(exerciseItem);
        });
    } catch (error) {
        console.error('Error loading exercise stats:', error);
    }
}

async function loadWorkoutHistory() {
    try {
        const history = await fetchData('/workout-history');
        const historyContainer = document.getElementById('workoutHistory');
        historyContainer.innerHTML = '';
        
        // Sort workouts by date (newest first)
        const sortedDates = Object.keys(history).sort((a, b) => new Date(b) - new Date(a));
        
        sortedDates.forEach(date => {
            const workouts = history[date];
            workouts.forEach(workout => {
                const workoutItem = document.createElement('div');
                workoutItem.className = 'workout-history-item';
                
                // Get the workout data for this day
                const workoutDayData = workoutData[workout.day.toLowerCase()];
                
                workoutItem.innerHTML = `
                    <div class="workout-info">
                        <h4>${workoutDayData.title}</h4>
                        <span class="date">${new Date(workout.timestamp).toLocaleDateString()}</span>
                        <span class="duration">Duration: ${workout.duration} minutes</span>
                    </div>
                    
                    <div class="workout-sections">
                        <!-- Warm-up Section -->
                        <div class="workout-section warmup">
                            <h5>Warm-up</h5>
                            <div class="exercises">
                                ${workoutDayData.warmup.map(exercise => `
                                    <div class="exercise">
                                        <span class="exercise-name">${exercise}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Main Exercises Section -->
                        <div class="workout-section main">
                            <h5>Main Exercises</h5>
                            <div class="exercises">
                                ${workout.exercises.map(exercise => {
                                    const originalExercise = workoutDayData.exercises.find(e => e.name === exercise.name);
                                    return `
                                        <div class="exercise">
                                            <h6>${exercise.name}</h6>
                                            <div class="exercise-details">
                                                <span class="equipment">${originalExercise.equipment}</span>
                                                <span class="recommended">Recommended: ${originalExercise.reps}</span>
                                            </div>
                                            <div class="sets">
                                                ${exercise.sets.map(set => `
                                                    <div class="set">
                                                        <span>${set.reps} reps</span>
                                                        <span>${set.weight} kg</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        
                        <!-- Cool-down Section -->
                        <div class="workout-section cooldown">
                            <h5>Cool-down</h5>
                            <div class="exercises">
                                ${workoutDayData.cooldown.map(exercise => `
                                    <div class="exercise">
                                        <span class="exercise-name">${exercise}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                historyContainer.appendChild(workoutItem);
            });
        });
    } catch (error) {
        console.error('Error loading workout history:', error);
    }
}

async function displayExerciseProgress() {
    try {
        const progressContainer = document.getElementById('exercise-progress');
        if (!progressContainer) return;
        progressContainer.innerHTML = '';

        const history = await fetchData('/workout-history');
        const exerciseStats = await fetchData('/exercise-stats');
        
        // Create sections for different exercise types
        const sections = {
            warmup: { title: 'Warm-Up Progress', exercises: new Set() },
            main: { title: 'Main Exercises Progress', exercises: new Set() },
            cooldown: { title: 'Cool-Down Progress', exercises: new Set() }
        };

        // Collect exercises from workout history
        Object.values(history).forEach(workouts => {
            workouts.forEach(workout => {
                const workoutDayData = workoutData[workout.day.toLowerCase()];
                if (!workoutDayData) return;

                // Add warm-up exercises
                workoutDayData.warmup.forEach(exercise => {
                    sections.warmup.exercises.add(exercise);
                });

                // Add main exercises
                workout.exercises.forEach(exercise => {
                    sections.main.exercises.add(exercise.name);
                });

                // Add cool-down exercises
                workoutDayData.cooldown.forEach(exercise => {
                    sections.cooldown.exercises.add(exercise);
                });
            });
        });
        
        // Create progress sections
        Object.entries(sections).forEach(([sectionType, section]) => {
            if (section.exercises.size === 0) return;

            const sectionElement = document.createElement('div');
            sectionElement.className = 'progress-section';
            sectionElement.innerHTML = `<h3>${section.title}</h3>`;
            
            Array.from(section.exercises).forEach(exerciseName => {
                const stats = exerciseStats[exerciseName];
                const progressCard = document.createElement('div');
                progressCard.className = 'progress-card';
                
                if (sectionType === 'main') {
                    // For main exercises, show detailed stats
                    const totalSets = stats?.totalSets || 0;
                    const progressPercentage = Math.min((totalSets / 30) * 100, 100);
                    
                    progressCard.innerHTML = `
                            <h4>${exerciseName}</h4>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${progressPercentage}%"></div>
                        </div>
                        <div class="stats">
                            <span>Total Sets: ${totalSets}</span>
                            <span>Times Performed: ${stats?.count || 0}</span>
                            <span>Last Performed: ${stats?.lastPerformed ? new Date(stats.lastPerformed).toLocaleDateString() : 'Never'}</span>
                        </div>
                    `;
                } else {
                    // For warm-up and cool-down, show simpler stats
                    const timesPerformed = stats?.count || 0;
                    const progressPercentage = Math.min((timesPerformed / 10) * 100, 100); // Milestone: 10 times
                    
                    progressCard.innerHTML = `
                        <h4>${exerciseName}</h4>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${progressPercentage}%"></div>
                        </div>
                        <div class="stats">
                            <span>Times Performed: ${timesPerformed}</span>
                            <span>Last Performed: ${stats?.lastPerformed ? new Date(stats.lastPerformed).toLocaleDateString() : 'Never'}</span>
                        </div>
                    `;
                }
                
                sectionElement.appendChild(progressCard);
            });
            
            progressContainer.appendChild(sectionElement);
        });
            } catch (error) {
        console.error('Error displaying exercise progress:', error);
    }
}

// Function to save workout data
async function saveWorkoutData(workout) {
    try {
        const response = await fetch(`${API_BASE_URL}/save-workout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workout)
        });
        
        if (!response.ok) {
            throw new Error('Failed to save workout data');
            }
        
        return await response.json();
    } catch (error) {
        console.error('Error saving workout data:', error);
        throw error;
    }
}

// Function to calculate personal bests
function calculatePersonalBests(workout) {
    const personalBests = {};
    
    workout.exercises.forEach(exercise => {
        exercise.sets.forEach(set => {
            if (set.reps && set.weight) {
                const volume = set.reps * set.weight;
                if (!personalBests[exercise.name] || volume > personalBests[exercise.name].volume) {
                    personalBests[exercise.name] = {
                        reps: set.reps,
                        weight: set.weight,
                        volume: volume,
                        date: new Date().toISOString()
                    };
                }
            }
        });
    });
    
    return personalBests;
} 