// Fraction division problems covering all required types
const problems = [
    {
        problem: "3/4 ÷ 2",
        steps: [
            "Write the whole number as a fraction: 2 = 2/1",
            "Find the reciprocal of the divisor: reciprocal of 2/1 is 1/2",
            "Change division to multiplication: 3/4 × 1/2",
            "Multiply numerators: 3 × 1 = 3",
            "Multiply denominators: 4 × 2 = 8",
            "Result: 3/8"
        ],
        options: [
            "Add the numbers: 3/4 + 2 = 2 3/4",
            "Write the whole number as a fraction: 2 = 2/1",
            "Subtract: 3/4 - 2 = -1 1/4",
            "Multiply directly: 3/4 × 2 = 6/4"
        ],
        correct: 1
    },
    {
        problem: "2/3 ÷ 1/4",
        steps: [
            "Find the reciprocal of the divisor: reciprocal of 1/4 is 4/1",
            "Change division to multiplication: 2/3 × 4/1",
            "Multiply numerators: 2 × 4 = 8",
            "Multiply denominators: 3 × 1 = 3",
            "Result: 8/3 = 2 2/3"
        ],
        options: [
            "Add the fractions: 2/3 + 1/4 = 11/12",
            "Find the reciprocal of the divisor: reciprocal of 1/4 is 4/1",
            "Subtract: 2/3 - 1/4 = 5/12",
            "Multiply denominators: 3 × 4 = 12"
        ],
        correct: 1
    },
    {
        problem: "0.6 ÷ 3",
        steps: [
            "Convert decimal to fraction: 0.6 = 6/10 = 3/5",
            "Write whole number as fraction: 3 = 3/1",
            "Find reciprocal of divisor: reciprocal of 3/1 is 1/3",
            "Change to multiplication: 3/5 × 1/3",
            "Multiply numerators: 3 × 1 = 3",
            "Multiply denominators: 5 × 3 = 15",
            "Result: 3/15 = 1/5 = 0.2"
        ],
        options: [
            "Move decimal point: 0.6 ÷ 3 = 0.2",
            "Convert decimal to fraction: 0.6 = 6/10 = 3/5",
            "Add: 0.6 + 3 = 3.6",
            "Multiply: 0.6 × 3 = 1.8"
        ],
        correct: 1
    },
    {
        problem: "50% ÷ 5",
        steps: [
            "Convert percentage to fraction: 50% = 50/100 = 1/2",
            "Write whole number as fraction: 5 = 5/1",
            "Find reciprocal of divisor: reciprocal of 5/1 is 1/5",
            "Change to multiplication: 1/2 × 1/5",
            "Multiply numerators: 1 × 1 = 1",
            "Multiply denominators: 2 × 5 = 10",
            "Result: 1/10 = 0.1 = 10%"
        ],
        options: [
            "Calculate 50 ÷ 5 = 10",
            "Convert percentage to fraction: 50% = 50/100 = 1/2",
            "Add: 50% + 5 = 55%",
            "Multiply: 50% × 5 = 250%"
        ],
        correct: 1
    },
    {
        problem: "3/8 ÷ 0.25",
        steps: [
            "Convert decimal to fraction: 0.25 = 25/100 = 1/4",
            "Find reciprocal of divisor: reciprocal of 1/4 is 4/1",
            "Change to multiplication: 3/8 × 4/1",
            "Multiply numerators: 3 × 4 = 12",
            "Multiply denominators: 8 × 1 = 8",
            "Result: 12/8 = 3/2 = 1 1/2"
        ],
        options: [
            "Add: 3/8 + 0.25 = 0.625",
            "Convert decimal to fraction: 0.25 = 25/100 = 1/4",
            "Subtract: 0.25 - 3/8 = -0.125",
            "Divide directly: 3/8 ÷ 0.25 = 1.5"
        ],
        correct: 1
    },
    {
        problem: "2 1/2 ÷ 1/3",
        steps: [
            "Convert mixed number to improper fraction: 2 1/2 = 5/2",
            "Find reciprocal of divisor: reciprocal of 1/3 is 3/1",
            "Change to multiplication: 5/2 × 3/1",
            "Multiply numerators: 5 × 3 = 15",
            "Multiply denominators: 2 × 1 = 2",
            "Result: 15/2 = 7 1/2"
        ],
        options: [
            "Divide whole numbers only: 2 ÷ 1/3 = 6",
            "Convert mixed number to improper fraction: 2 1/2 = 5/2",
            "Add: 2 1/2 + 1/3 = 2 5/6",
            "Subtract: 2 1/2 - 1/3 = 2 1/6"
        ],
        correct: 1
    },
    {
        problem: "0.125 ÷ 4",
        steps: [
            "Convert decimal to fraction: 0.125 = 125/1000 = 1/8",
            "Write whole number as fraction: 4 = 4/1",
            "Find reciprocal of divisor: reciprocal of 4/1 is 1/4",
            "Change to multiplication: 1/8 × 1/4",
            "Multiply numerators: 1 × 1 = 1",
            "Multiply denominators: 8 × 4 = 32",
            "Result: 1/32 = 0.03125"
        ],
        options: [
            "Move decimal: 0.125 ÷ 4 = 0.03125",
            "Convert decimal to fraction: 0.125 = 125/1000 = 1/8",
            "Add: 0.125 + 4 = 4.125",
            "Multiply: 0.125 × 4 = 0.5"
        ],
        correct: 1
    },
    {
        problem: "75% ÷ 3/4",
        steps: [
            "Convert percentage to fraction: 75% = 75/100 = 3/4",
            "Find reciprocal of divisor: reciprocal of 3/4 is 4/3",
            "Change to multiplication: 3/4 × 4/3",
            "Multiply numerators: 3 × 4 = 12",
            "Multiply denominators: 4 × 3 = 12",
            "Result: 12/12 = 1"
        ],
        options: [
            "Add: 75% + 3/4 = 150%",
            "Convert percentage to fraction: 75% = 75/100 = 3/4",
            "Subtract: 75% - 3/4 = 0%",
            "Divide directly: 75% ÷ 75% = 1"
        ],
        correct: 1
    },
    {
        problem: "4/5 ÷ 0.2",
        steps: [
            "Convert decimal to fraction: 0.2 = 2/10 = 1/5",
            "Find reciprocal of divisor: reciprocal of 1/5 is 5/1",
            "Change to multiplication: 4/5 × 5/1",
            "Multiply numerators: 4 × 5 = 20",
            "Multiply denominators: 5 × 1 = 5",
            "Result: 20/5 = 4"
        ],
        options: [
            "Add: 4/5 + 0.2 = 1.0",
            "Convert decimal to fraction: 0.2 = 2/10 = 1/5",
            "Subtract: 0.2 - 4/5 = -0.6",
            "Divide directly: 0.8 ÷ 0.2 = 4"
        ],
        correct: 1
    },
    {
        problem: "1 3/4 ÷ 0.5",
        steps: [
            "Convert mixed number to improper fraction: 1 3/4 = 7/4",
            "Convert decimal to fraction: 0.5 = 5/10 = 1/2",
            "Find reciprocal of divisor: reciprocal of 1/2 is 2/1",
            "Change to multiplication: 7/4 × 2/1",
            "Multiply numerators: 7 × 2 = 14",
            "Multiply denominators: 4 × 1 = 4",
            "Result: 14/4 = 7/2 = 3 1/2"
        ],
        options: [
            "Divide whole numbers: 1 ÷ 0.5 = 2",
            "Convert mixed number to improper fraction: 1 3/4 = 7/4",
            "Add: 1 3/4 + 0.5 = 2 1/4",
            "Subtract: 1 3/4 - 0.5 = 1 1/4"
        ],
        correct: 1
    }
];

// DOM elements
const startScreen = document.getElementById('start-screen');
const processScreen = document.getElementById('process-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const problemText = document.getElementById('problem-text');
const problemCount = document.getElementById('problem-count');
const stepsDisplay = document.getElementById('steps-display');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const feedbackMessage = document.getElementById('feedback-message');
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');

// Game state
let currentProblemIndex = 0;
let score = 0;
let selectedAnswer = null;

// Initialize game
function initGame() {
    currentProblemIndex = 0;
    score = 0;
    showStartScreen();
}

// Show start screen
function showStartScreen() {
    startScreen.classList.remove('hidden');
    processScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
}

// Start the activity
function startActivity() {
    startScreen.classList.add('hidden');
    processScreen.classList.remove('hidden');
    loadProblem();
}

// Load current problem
function loadProblem() {
    selectedAnswer = null;
    const current = problems[currentProblemIndex];
    problemText.textContent = current.problem;
    problemCount.textContent = currentProblemIndex + 1;
    
    // Display steps
    displaySteps(current.steps);
    
    // Display options
    displayOptions(current.options);
}

// Display steps
function displaySteps(steps) {
    stepsDisplay.innerHTML = '';
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.innerHTML = `<span class="step-number">${index + 1}.</span> ${step}`;
        stepsDisplay.appendChild(stepElement);
    });
}

// Display options
function displayOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectAnswer(index, options.length));
        optionsContainer.appendChild(optionBtn);
    });
}

// Play sound safely
function playSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(e => console.log("Audio play prevented:", e));
}

// Handle answer selection
function selectAnswer(choiceIndex, totalOptions) {
    if (selectedAnswer !== null) return;
    selectedAnswer = choiceIndex;
    
    // Highlight selected button
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons[choiceIndex].classList.add('selected');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check answer
    const current = problems[currentProblemIndex];
    const isCorrect = choiceIndex === current.correct;
    
    if (isCorrect) {
        score++;
        playSound(correctSound);
    } else {
        playSound(incorrectSound);
    }
    
    // Move to next problem or end activity
    setTimeout(() => {
        currentProblemIndex++;
        if (currentProblemIndex < problems.length) {
            loadProblem();
        } else {
            endActivity();
        }
    }, 2000);
}

// End the activity
function endActivity() {
    processScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    
    scoreElement.textContent = score;
    
    let feedback = '';
    let feedbackClass = '';
    
    if (score >= 9) {
        feedback = "Excellent! You've mastered fraction division!";
        feedbackClass = 'excellent';
    } else if (score >= 7) {
        feedback = "Great job! You understand fraction division processes well!";
        feedbackClass = 'good';
    } else if (score >= 5) {
        feedback = "Good effort! Review the fraction division steps to improve.";
        feedbackClass = 'practice';
    } else {
        feedback = "Keep practicing! Understanding fraction division takes time and practice.";
        feedbackClass = 'practice';
    }
    
    feedbackMessage.textContent = feedback;
    feedbackMessage.className = `feedback ${feedbackClass}`;
}

// Event listeners
startBtn.addEventListener('click', startActivity);
restartBtn.addEventListener('click', initGame);

// Initialize the game
initGame();