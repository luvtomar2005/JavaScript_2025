// Immediately Invoked Function expressions

// this is the super important topic to learn about
// This can create so many confusion so understand this code carefully

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Luv Tomar')


