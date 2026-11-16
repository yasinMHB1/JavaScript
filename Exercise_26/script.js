// non-blocking code
function delay_code(callback) {
 
    setTimeout( () => {
        callback(("delying in 3s with out blocking the entire code."))
    },3000)
}

console.log("Starting our program...");

delay_code(  (msg) => {
    console.log(msg)
})

console.log("this message is not bliocking by the function")

console.log("----------------------------------")
// blocking code

console.log("Starting our program...");

function message() {
    return "no delay happen for this function."
}

console.log(message());


console.log("this message is after the function");

