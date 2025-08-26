let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())


// let myCreatedDate = new Date(2025 , 0 , 26)
let newCreatedDate = new Date("01-14-2023")

// console.log(newCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000)) // For the values in seconds

let presentDate = new Date()
console.log(presentDate.getDay())
console.log(presentDate.getFullYear())
console.log(presentDate.getMinutes())
console.log(presentDate.getMonth())
console.log(presentDate.getTime())