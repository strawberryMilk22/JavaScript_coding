// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// Define a function that takes a callback function as a parameter
function processData(data, callback) {
    console.log("Processing data...");
    // Simulate some data processing
    let processedData = data.toUpperCase();

    // Call the callback function with the processed data
    callback(processedData);
}

// Define a callback function
function displayData(data) {
    console.log("The processed data is:", data);
}

// Example usage:
let input = "hello, world";
processData(input, displayData);
