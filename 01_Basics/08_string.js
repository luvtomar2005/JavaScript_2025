const Name = "Luv Tomar"
const repoCount = 50

console.log(Name + repoCount + " Value") // this is the very outdated method to concat the string
console.log(`Hello my name is ${Name} and the repo count is ${repoCount}`)

const name = new String("Luv Tomar")
console.log(name[0])
console.log(name.__proto__) // This will return the object as empty
// but it is not empty it also contains value in key value pair
console.log(name.length)
console.log(name.toUpperCase());
console.log(name.charAt(9));
console.log(name.indexOf('t'));

const OneName = name.substring(0,4)
console.log(OneName)

const anotherName = "   Thakur    "
console.log(anotherName)
console.log(anotherName.trim())

const weHave = 'The quick brown     fox jumps over the lazy dog'
const words = weHave.split(/\s+/)
console.log(words[3])