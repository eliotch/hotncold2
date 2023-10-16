const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guess-button').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess-input').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('feedback').textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        const difference = Math.abs(guess - targetNumber);
        if (difference === 0) {
            document.getElementById('feedback').textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        } else if (difference <= 10) {
            document.getElementById('feedback').textContent = 'Hot';
        } else if (difference <= 30) {
            document.getElementById('feedback').textContent = 'Warm';
        } else {
            document.getElementById('feedback').textContent = 'Cold';
        }
    }
});
