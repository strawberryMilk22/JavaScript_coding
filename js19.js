// 19. Write a JavaScript function that returns array elements larger than a number. 

function getElementsLargerThan(arr, num) {
    return arr.filter(element => element > num);
}

let numbers = [1, 5, 8, 12, 20, 3];
let num = 6;
let result = getElementsLargerThan(numbers, num);
console.log(result); // Output: [8, 12, 20]
