function addTwoNumbers(number1, number2){
    return number1 + number2
}
const result = addTwoNumbers(3,5)
console.log("Result : ", result)

function loginUserMessage(userName){
    if(userName == undefined){
        console.log("Please enter a userName")
        return
    }
    return `${userName} just logged in `
}
console.log(loginUserMessage("Luv"))

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "Luv",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)
}
handleObject(user)
handleObject({ username: "sam", price : 399 })

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
