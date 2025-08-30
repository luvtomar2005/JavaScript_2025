const user = {
    username : "Lovely",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website `);
        // We use this to get the value of the current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "lovely"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let usernmae = "lovely"
//     console.log(this.username);
// }

const chai = ()  => {
    let username = "Luv"
    console.log(this);
}

chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))
const addTwo = (num1, num2) => num1 + num2 // This is known as the explicit return where we dont use our return keyword
console.log(addTwo(5,6))

// const addThree = (num1,num2) => ({username : "Lovely"})


