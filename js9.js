// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(arg) {
    return typeof arg;
}

console.log(getType(123));        // Output: 'number'
console.log(getType('hello'));    // Output: 'string'
console.log(getType(true));       // Output: 'boolean'
console.log(getType({}));         // Output: 'object'
console.log(getType(function () { })); // Output: 'function'
console.log(getType(undefined));  // Output: 'undefined'
