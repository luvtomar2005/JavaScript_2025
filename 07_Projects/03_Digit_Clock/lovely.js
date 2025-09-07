// Select the HTML element with the id 'clock' where we want to display the time
const clock = document.getElementById('clock');
// Now we will use the setinterval function of javascript where we will repeadetly calls the function at sepcified intervals
// we are using this because we want to get time at every second(1000 milliseconds)
setInterval(function(){
    let date = new Date();
    // Convert the current time to user readable string format
    // This uses the local time of the user's device 
    console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleString();

} , 1000)


