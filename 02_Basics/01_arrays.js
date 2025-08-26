const myArr = [1,2,3,4,5]

// console.log(myArr[0])

// Array methods 
// myArr.push(6)

console.log(myArr.unshift(9))
console.log(myArr)
console.log(myArr.shift())

// ++++++ Slice and Splice+++++
const myArr1 = myArr.slice(1,3)
console.log("A " , myArr)

const myArr2 = myArr.slice(1,2)
console.log("B" , myArr2)

const myArr3 = myArr.splice(0,2)
console.log("C" , myArr3)