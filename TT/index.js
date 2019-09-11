let matrix = [[1, 2, 3],

    [4, 5, 6],

    [7, 8, 9]];

    function reverseOnDiagonals( matrix ){

    let n = matrix.length;

    for ( let i=0; i < n/2; i++ ) {

        let temp = matrix[i][i];

        matrix[i][i] = matrix[n-i-1][n-i-1];

        matrix[n-i-1][n-i-1] = temp;

        temp = matrix[i][n-i-1];
        matrix[i][n-i-1] = matrix[n-i-1][i];
        matrix[n-i-1][i] = temp;
    }

    return matrix;

    }

console.log(reverseOnDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

