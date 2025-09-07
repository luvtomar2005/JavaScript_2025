// Print a message to the console to check if the script is running
console.log("hitesh");

// Select all elements with the class 'button' and store them in 'buttons' NodeList
const buttons = document.querySelectorAll('.button');

// Select the <body> element so that we can change its background color later
const body = document.querySelector('body');

// Loop through each button and attach a click event listener to it
buttons.forEach(function (button) {
  // Print each button element to the console to verify the selection
  console.log(button);

  // Add a click event listener to the button
  button.addEventListener('click', function (e) {
    // Log the event object to see details about the click event
    console.log(e);

    // Log the actual element that was clicked (the target of the event)
    console.log(e.target);

    // Check if the clicked button has the id 'grey'
    if (e.target.id === 'grey') {
      // Change the body's background color to 'grey'
      body.style.backgroundColor = e.target.id;
    }

    // Check if the clicked button has the id 'white'
    if (e.target.id === 'white') {
      // Change the body's background color to 'white'
      body.style.backgroundColor = e.target.id;
    }

    // Check if the clicked button has the id 'blue'
    if (e.target.id === 'blue') {
      // Change the body's background color to 'blue'
      body.style.backgroundColor = e.target.id;
    }

    // Check if the clicked button has the id 'yellow'
    if (e.target.id === 'yellow') {
      // Change the body's background color to 'yellow'
      body.style.backgroundColor = e.target.id;
    }
  });
});
