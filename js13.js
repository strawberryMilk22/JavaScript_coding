// 13. Write a JavaScript function to compute the factors of a positive integer. 

function getFactors(num) {
    if (num <= 0) return "Input must be a positive integer.";

    let factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);

            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }

    return factors.sort((a, b) => a - b);
}

console.log(getFactors(28)); // Output: [1, 2, 4, 7, 14, 28]
console.log(getFactors(15)); // Output: [1, 3, 5, 15]
console.log(getFactors(1));  // Output: [1]
console.log(getFactors(0));  // Output: "Input must be a positive integer."
  