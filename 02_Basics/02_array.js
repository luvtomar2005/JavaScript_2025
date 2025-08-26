const marvelHeros = ["ironman" , "spiderman" , "thor"]
const dcHeros = ["superman" , "batman" , "flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros[3][1])

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)


// Other than this we will use spread operators

const all_new_heros = [...marvelHeros , ...dcHeros]
// console.log(all_new_heros)


const another_Array = [
  1, 2, 3,
  [4, 5, 6],
  7,
  [112, 121, 212121, [121213123, 1212, [1212, 1222]]]
]
// Now this array inside array which we will crate a lot of mess if we just print it
console.log(another_Array)
console.log(another_Array.flat(Infinity))

console.log(Array.isArray("Luv Tomar"))
console.log(Array.from("Luv Tomar"))
console.log(Array.from({name : "Luv Tomar"})) // Very intresting case

let score1 = 100
let score2 = 200
let score3 = 400
console.log(Array.of(score1 , score2,score3))
