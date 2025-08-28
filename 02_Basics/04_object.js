// how to declare objectes as singleton or can make by using constructor
// const tinderUser = new Object()  This one is singleton object
const tinderUser = {} // This is non singleton object

tinderUser.id = "123abs"
tinderUser.name = "Luv Tomar"
tinderUser.isLoggedIn = true

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userFullName : {
            firstName : "Luv",
            lastName  : "Tomar"
        }
    }

}
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "a" , 6 : "b"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id : 1,
        email : "luv@gmail.com"
    },
    {
        id : 1,
        email : "lovely@gmail.com"
    },
    {
        id : 2,
        email : "thakur@gmail.com"
    }

]
users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // This will return keys in the form of array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('notLoggedIn'))

// Destructuring of objects
const course = {
    courseName : "javascript in Hindi",
    price : "000",
    courseInstructor : "Lovely The Boss"
}
// console.log(course.courseInstructor) This is the basic syntax for printing
// But i might get messy when we have to print it a lot of times
const {courseInstructor : instructor} = course // Iska matlab konsi value kaha se 
// extract karni hai aur : ke baad matlab humne name name deconsturct kar diya
console.log(instructor);


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]
