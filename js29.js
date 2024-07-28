// 29. Write a JavaScript function to get the function name. 

function getFunctionName(fn) {
    if (typeof fn === 'function') {
        return fn.name || "(anonymous)";
    }
}


// Named function
function exampleFunction() {
    // Some logic here
}
console.log(getFunctionName(exampleFunction)); // Output: "exampleFunction"

// Anonymous function assigned to a variable
const anonymousFunction = function () {
    
};
console.log(getFunctionName(anonymousFunction)); // Output: "(anonymous)"

// Arrow function (anonymous)
const arrowFunction = () => {
   
};
console.log(getFunctionName(arrowFunction)); // Output: "(anonymous)"

// Named function expression
const namedFunctionExpression = function namedFunc() {
    
};
console.log(getFunctionName(namedFunctionExpression)); // Output: "namedFunc"
