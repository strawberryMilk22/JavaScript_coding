// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identityMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];

        for (let j = 0; j < n; j++) {

            row.push(i === j ? 1 : 0);
        }

        matrix.push(row);
    }

    return matrix;
}

let matrixSize = 4;
let identity = identityMatrix(matrixSize);
console.log(identity);
