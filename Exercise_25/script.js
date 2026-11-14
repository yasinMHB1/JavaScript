

//  spread operator
let arr = [1, 2, 3] 
let newArr = [...arr, 4, 5, 6]
console.log(newArr);


// rest operator
function multiply(...num) {
    return num.reduce((total, num) => total * num, 1)
}

console.log(multiply(2,3,4))