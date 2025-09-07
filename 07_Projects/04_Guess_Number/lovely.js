// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field where user enters their guess
const guessSlot = document.querySelector('.guesses'); // Area to display all previous guesses
const remaining = document.querySelector('.lastResult'); // Area to show remaining attempts
const lowOrHi = document.querySelector('.lowOrHi'); // Area to show hint (too low , too high , etc..)
const startOver = document.querySelector('.resultParas'); // Container where new game button will be added

// Create a paragraph element dynmically for "Start new Game" button
const p = document.createElement('p');
// Initialize variables to track previous guesses and number of attempts
let prevGuess = [];
let numGuess = 1;

// Boolean to trakc if the game is ongoing
let playGame = true;
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault(); // Prevent from submission that reloads the page
        const guess = parseInt(userInput.value); // Convert user input to integer
        console.log(guess); // Log the guess for debugging 
        validateGuess(guess); // call validation function
    })
}

// Function to validate the user's input
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number '); // If input is not a number
    }
    else if(guess < 1){
        alert('Please enter a number more than 1'); // If input is less than 1 
    }
    else if(guess > 100){
        alert('Please enter a number less than 100'); // If input is greater than 100
    }
    else{
        prevGuess.push(guess); // Store the valid guess in an array
        if(numGuess === 11){ // If the user has reached max attempts
            displayGuess(guess);
            displayMessage(`Game Over . Random number was ${randomNumber}`);
            endGame(); // End the game
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    // Function to compare the guess with the random number and provide hints 
    function checkGuess(guess){
        if(guess === randomNumber){
            displayMessage('You guessed it right'); // Correct guess
            endGame(); // End the game
        }
        else if(guess < randomNumber){
            displayMessage('Number is TOO Low'); // Hint for low guess
        }
        else if(guess > randomNumber){
            displayMessage('Number is TOO High'); // Hint for high guess
        }
    }
}

// Yaha ke baad ka code mene khud nahi likha just copy paste it so remember for future revision to read and practice it again


// Function to display previous guesses and update remaining attempts
function displayGuess(guess) {
  userInput.value = ''; // Clear input field after each guess
  guessSlot.innerHTML += `${guess}, `; // Append guess to guess list
  numGuess++; // Increment attempt counter
  remaining.innerHTML = `${11 - numGuess} `; // Update remaining attempts
}

// Function to show messages or hints to the user
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; // Update message section dynamically
}

// Function to handle the end of the game
function endGame() {
  userInput.value = ''; // Clear input
  userInput.setAttribute('disabled', ''); // Disable input to prevent further guesses
  p.classList.add('button'); // Add styling class to the new game button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Create new game button text
  startOver.appendChild(p); // Add the button to the DOM
  playGame = false; // Mark the game as ended
  newGame(); // Prepare for a new game setup
}

// Function to reset the game and start a new round
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Select the new game button
  newGameButton.addEventListener('click', function (e) {
    // Generate a new random number
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; // Reset previous guesses
    numGuess = 1; // Reset guess counter
    guessSlot.innerHTML = ''; // Clear the guess history
    remaining.innerHTML = `${11 - numGuess} `; // Reset remaining attempts
    userInput.removeAttribute('disabled'); // Enable input field again
    startOver.removeChild(p); // Remove the new game button
    playGame = true; // Set game status back to active
  });
}
