// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

function combiString(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let s = '';
        for (let j = i; j < str.length; j++) {
            s = s + str[j];
            arr.push(s);
        }       
    }
    return arr;
}

console.log(combiString('dog'));