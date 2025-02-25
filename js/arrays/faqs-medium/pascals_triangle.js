// Given an integer numRows return the first numRows rows of Pascal's triangle.



// In Pascal's triangle:

// The first row has one element with a value of 1.
// Each row has one more element in it than its previous row.
// The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.

// Examples:

// Input: numRows = 4
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
// Explanation: 1st Row has its value set to 1.
// All other cells take their value as the sum of the values directly above them

// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
// Explanation: 1st Row has its value set to 1.
// All other cells take their value as the sum of the values directly above them

// Input: numRows = 3
// Output: [[1], [1, 1], [1, 2, 1]]

// Constraints:
// 1 <= numRows <= 30

// Hint 1
// Each element in a row (except the first and last) is the sum of the two elements directly above it from the previous row. This recursive relationship can be used to compute Pascal's triangle row by row.

// Hint 2
// For each row, initialize the first and last elements as 1. Compute the middle elements using values from the previous row.

class PascalsTriangle {
    // VARIETY 3
    // Print pascal's triangle till the row number
    pascalTriangle(numRows) {
        let triangle = [];

        for (let i = 0; i < numRows; i++) {
            triangle.push(this.generateRow(i + 1))
        }

        return triangle;
    }

    // VARIETY 1
    // Given the row number and column number
    // find the value at that place
    // row and col starts from 1 instead of 0
    getValueAtRowCol(row, col) {
        return this.ncr(row - 1, col - 1)
    }

    // VARIETY 2
    // Given a row number, print the 
    // series at that row
    generateRow(row) {
        let res = [1];

        for (let col = 1; col < row; col++) {
            res.push(
                Math.round(res[col - 1] * ((row - col) / col))
            )
        }

        return res;
    }


    ncr(n, r) {
        let res = 1;

        if (r > n - r) {
            r = n - r;
        }

        for (let i = 1; i <= r; i++) {
            res = res * (n - (i - 1));
            res = Math.round(res / i);
        }

        return res;
    }
}
