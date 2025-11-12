let currentQuantity;
let score = 0;
const MAX_SCORE = 5; // Total problems to solve to win

const quantities = [100, 120, 150, 180, 200, 240, 300, 360, 400, 500];
const denominators = [2, 3, 4, 5, 6, 8, 10];
const units = ["Cedis", "Pencils", "Oranges", "Books", "Stones"];

/**
 * Generates a random fraction and quantity problem where the quantity
 * is divisible by the denominator to ensure a whole number answer.
 */
function generateProblem() {
    let quantity;
    let denominator;
    let numerator;

    // Ensure the quantity is perfectly divisible by the denominator
    do {
        quantity = quantities[Math.floor(Math.random() * quantities.length)];
        denominator = denominators[Math.floor(Math.random() * denominators.length)];
    } while (quantity % denominator !== 0);

    // Numerator must be less than the denominator and not zero
    do {
        numerator = Math.floor(Math.random() * denominator) + 1;
    } while (numerator === denominator);

    // The result of the calculation is the new currentQuantity
    currentQuantity = quantity;
    const answer = (quantity / denominator) * numerator;
    const unit = units[Math.floor(Math.random() * units.length)];

    const questionText = `Find ${numerator}/${denominator} of ${currentQuantity} ${unit}.`;

    return {
        question: questionText,
        answer: answer,
        newUnit: unit
    };
}

/**
 * Starts the game or moves to the next challenge.
 */
function startLevel() {
    if (score >= MAX_SCORE) {
        displayVictory();
        return;
    }

    const problem = generateProblem();
    document.getElementById('quantity-display').textContent = `${currentQuantity} (Previous Answer)`;
    document.getElementById('question').textContent = problem.question;
    document.getElementById('answer-input').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('next-level-btn').style.display = 'none';

    // Store the correct answer and new unit for checking
    window.correctAnswer = problem.answer;
    window.newUnit = problem.newUnit;
}

/**
 * Checks the user's input against the correct answer.
 */
function checkAnswer() {
    const userInput = parseInt(document.getElementById('answer-input').value);
    const messageElement = document.getElementById('message');

    if (isNaN(userInput)) {
        messageElement.textContent = "Please enter a valid number.";
        messageElement.className = 'message-area incorrect';
        return;
    }

    if (userInput === window.correctAnswer) {
        messageElement.textContent = `Correct! ${userInput} ${window.newUnit} is the next step.`;
        messageElement.className = 'message-area correct';
        score++;
        document.getElementById('score').textContent = score;
        
        // Update the current quantity for the next round to be the answer
        currentQuantity = window.correctAnswer;
        document.getElementById('next-level-btn').style.display = 'block';

        // Disable input until next challenge is pressed
        document.getElementById('answer-input').disabled = true;
    } else {
        messageElement.textContent = "Incorrect. Try again!";
        messageElement.className = 'message-area incorrect';
    }
}

/**
 * Prepares the game for the next challenge.
 */
function nextLevel() {
    document.getElementById('answer-input').disabled = false;
    startLevel();
}

/**
 * Displays the final victory message.
 */
function displayVictory() {
    document.getElementById('question').textContent = `🥳 Treasure Found! You solved ${MAX_SCORE} challenges!`;
    document.getElementById('quantity-display').textContent = `${currentQuantity} is the final secret value!`;
    document.getElementById('message').textContent = "Excellent work on fractions!";
    document.getElementById('message').className = 'message-area correct';
    document.getElementById('input-area').style.display = 'none';
    document.getElementById('next-level-btn').style.display = 'none';
}

// Initial call to start the game
document.addEventListener('DOMContentLoaded', () => {
    // Set an initial quantity for the very first question
    currentQuantity = 120; 
    document.getElementById('quantity-display').textContent = `${currentQuantity} (Starting Quantity)`;
    startLevel();
});