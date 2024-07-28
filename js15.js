// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

/*
function computePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to handle user input and display the result
function getUserInputAndCompute() {
    // Prompt the user for base and exponent
    let base = parseFloat(prompt("Enter the base (b):"));
    let exponent = parseInt(prompt("Enter the exponent (n):"), 10);

    // Validate the input
    if (isNaN(base) || isNaN(exponent)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Compute the power and display the result
    let result = computePower(base, exponent);
    console.log(`The result of ${base}^${exponent} is ${result}`);
}

//getUserInputAndCompute();
*/


//Node.js Version
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function computePower(base, exponent) {
  return Math.pow(base, exponent);
}

function getUserInputAndCompute() {
  rl.question('Enter the base (b): ', (baseInput) => {
    rl.question('Enter the exponent (n): ', (exponentInput) => {
      let base = parseFloat(baseInput);
      let exponent = parseInt(exponentInput, 10);

      // Validate the input
      if (isNaN(base) || isNaN(exponent)) {
        console.log("Invalid input. Please enter valid numbers.");
      } else {
        let result = computePower(base, exponent);
        console.log(`The result of ${base}^${exponent} is ${result}`);
      }

      rl.close();
    });
  });
}

// Run the function
getUserInputAndCompute();

