console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0);
console.log(null == 0)
console.log(null >= 0) // In javascript in this line null got converted to 0 so it will return true

console.log(undefined == 0)
console.log(undefined > 0) // In case of undefined it will always return false
console.log(undefined < 0)


// They all have different syntax of working 
console.log("2" == 2)
console.log("2" === 2) // this is strict check it will check the value as well as the datatype so it will return false