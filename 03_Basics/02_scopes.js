function one(){
    const username = "luv"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)

    // two()
}
// one()


if (true) {
    const username = "lovely";

    if (username == "lovely") {
        const website = " youtube ";
        console.log(username + website); // "lovely youtube "
    }

    // website is not accessible here → ReferenceError
    // console.log(website);

    console.log(username); // "lovely"
}


// // ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}
addTwo(5)

const addTwo = function(num){
    return num + 2
}
