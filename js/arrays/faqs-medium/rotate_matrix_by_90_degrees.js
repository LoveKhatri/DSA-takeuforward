// Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.

// The rotation must be done in place, meaning the input 2D matrix must be modified directly.

// Examples:

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// Input: matrix = [[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]]
// Output: matrix = [[5, 4, 2, 0], [6, 5, 0, 1], [7, 0, 3, 1], [0, 5, 1, 2]]

// Input: matrix = [[1, 1, 2], [5, 3, 1], [5, 3, 5]]
// Output: [[5, 5, 1], [3, 3, 1], [5, 1, 2]]

// Constraints:
// n == matrix.length.
// n == matrix[i].length.
// 1 <= n <= 100.
// -104 <= matrix[i][j] <= 104

// Hint 1
// Swap elements such that matrix[i][j] becomes matrix[j][i]. Reverse the order of elements in each row to complete the rotation.

// Hint 2
// Alternatively, rotate the matrix in layers, starting from the outermost layer and moving inward. For each layer, shift elements in groups of four.

class RotateMatrixBy90Degrees {
    rotateMatrix(matrix) {
        const N = matrix.length;

        // Transposing the matrix
        for (let row = 0; row < N - 1; row++) {
            for (let col = row + 1; col < N; col++) {
                [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
            }
        }

        for (let row = 0; row < N; row++) {
            matrix[row] = matrix[row].reverse();
        }
    }

    brute_rotateMatrix(matrix) {
        const N = matrix.length;

        let rm = new Array(N).fill().map(() => new Array(N).fill(0));

        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                rm[col][N - row - 1] = matrix[row][col];
            }
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                matrix[i][j] = rm[i][j];
            }
        }
    }
}