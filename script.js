// Function to check if a number is prime
function isPrime(num) {
    // If number is less than or equal to 1, it's not prime
    if (num <=1) {
        return false;
    }
    // Check for factors from 2 to square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by i, it's not prime
        if (num % i === 0) {
            return false;
        }
    }
    // If no factors found, num is prime
    return true;
}

// Function to display prime numbers up to a given number
function displayPrimeNumbers(n) {
    // Select the HTML element where prime numbers will be displayed
    const primeNumbersDiv = document.querySelector('#primeNumbers');
    // Clear the previous results displayed in the div
    primeNumbersDiv.innerHTML = ''; 
    // Loop through numbers from 2 to n
    for (let i = 2; i <= n; i++) {
        // If current number is prime, append it to the div content
        if (isPrime(i)) {
            primeNumbersDiv.innerHTML += i + ', ';
        }
    }
}

// Event listener for button click
document.querySelector('#checkPrimeBtn').addEventListener('click', function() {
    // Get the user input from the input field
    const userInput = parseInt(document.querySelector('#numberInput').value);
    // Check if the input is a valid integer
    if (!isNaN(userInput)) {
        // If valid, display prime numbers up to the user input
        displayPrimeNumbers(userInput);
    } else {
        // If not valid, show an alert message
        alert('Please enter a valid integer!');
    }
});