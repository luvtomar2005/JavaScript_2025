const score = 39
//console.log(score);

const newScore = new Number(score)
//console.log(newScore)

console.log(score.toString().length)
//console.log(score.toFixed())

const newNumber = 1100.2
// console.log(newNumber.toPrecision(3))  // It will precise and convert other to exponential

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'))
// The above line seprates the 000 according to indian number system


// ++++++++ Maths.library ++++++++++
// console.log(Math)
// console.log(Math.abs(-1))
// console.log(Math.ceil(40.21))
// console.log(Math.round(212.121))
// console.log(Math.floor(21.9))
// console.log(Math.pow(2 , 2))
console.log(Math.random())
console.log(Math.random() * 10 + 1)

// Now this is the very important formula below
const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1))) + min)