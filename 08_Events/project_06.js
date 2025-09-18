// generatem a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor , 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();

       
    }
     changeBgColor();
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector('#start').addEventListener('click' , startChangingColor);
document.querySelector('#stop').addEventListener('click' , stopChangingColor);

// Important thing why we are writing interval id before the function


// // setInterval() returns an ID number (a reference to the running interval).

// To stop that interval later (clearInterval(intervalId)), we must remember the ID.

// If you declare intervalId inside the function, it will get re-created every time you click "Start". That means Stop won’t know about it.

//  Declaring intervalId outside makes it global to both Start and Stop functions.

