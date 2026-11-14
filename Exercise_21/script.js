

// multiply all the numbers in the array using (reduce) ===>>> .reduce((accumulator, currentValue) => {}, initialValue); 
let n1 = [1, 2, 3, 4, 5]
const result = n1.reduce((total, num) => total * num, 1);
console.log(result);
