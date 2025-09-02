// if
const isUserLoggedIn = true
const temperature = 42
if( 40 === "40"){
    // console.log("executed")
}
else{
    // console.log("the input value is wrong ")
}
if(temperature == 40){
    // console.log("less than 50")
}
else{
    // console.log("wrong answer")
}


const score = 400
if(score > 100){
    let power = "fly"
    console.log(`User Power : ${power}`);

}
// console.log(`User Power : ${power}`) // This will not be executed because of scope

const balance = 2000

if(balance < 500){
    console.log("less than 500")
}
else if(balance < 750){
    console.log("less than 750")
}
else if(balance < 1000){
    console.log("Less than 1000")
}
else{
    console.log("greater than 1000")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course ")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in ");
}
