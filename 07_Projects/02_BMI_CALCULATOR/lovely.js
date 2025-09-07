// Select the form element from the HTML document
const form = document.querySelector('form');

// Note: If you try to get the value of an input field here (before form submission), it will return empty
// because the user hasn’t entered anything yet.
// Example:
// const height = parseInt(document.querySelector('#height').value);

// Add a 'submit' event listener to the form
form.addEventListener('submit', function(e) {
    // Prevent the default behaviour of form submission (which reloads the page)
    e.preventDefault();

    // Get the value of the height input field and convert it to an integer
    const height = parseInt(document.querySelector('#height').value);

    // Get the value of the weight input field and convert it to an integer
    const weight = parseInt(document.querySelector('#weight').value);

    // Select the element where we will display the results
    const results = document.querySelector('#results');

    // Check if the height input is empty, negative, or not a number
    if (isNaN(height) || height <= 0) {
        // Display an error message if the height is invalid
        results.innerHTML = `Please give a valid height. You entered: ${height}`;
    }
    // Check if the weight input is empty, negative, or not a number
    else if (isNaN(weight) || weight <= 0) {
        // Display an error message if the weight is invalid
        results.innerHTML = `Please give a valid weight. You entered: ${weight}`;
    }
    else {
        // Calculate the BMI using the formula: weight (kg) / (height in meters squared)
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Display the calculated BMI in the results section
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
});
