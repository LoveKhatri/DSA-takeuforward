// Given an M * N matrix, print the elements in a clockwise spiral manner. Return an array with the elements in the order of their appearance when printed in a spiral manner.

// Examples:

// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8]]
// Output: [1, 2, 3, 4, 8, 7, 6, 5]
// Explanation: The elements in the spiral order are 1, 2, 3, 4 -> 8, 7, 6, 5

// Input: matrix = [[1, 2], [3, 4], [5, 6], [7, 8]]
// Output: 2

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -100 <= matrix[i][j] <= 100

// Hint 1
// Treat the matrix as a collection of concentric rectangular layers. Traverse each layer in four steps: top row (left to right), right column (top to bottom), bottom row (right to left), and left column (bottom to top).

// Hint 2
// Maintain four boundaries (top, bottom, left, right) to keep track of the limits of the matrix as you spiral inward.

class PrintTheMatrixInSpiralManner {
    spiralOrder(matrix) {
        let rows = matrix.length;
        let columns = matrix[0].length;

        let left = 0, right = columns - 1;
        let top = 0, bottom = rows - 1;

        let result = [];

        while (top <= bottom && left <= right) {
            // top -- left->right (row1)
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;

            // right -- top->bottom (column5)
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right])
            }
            right--;


            if (top <= bottom) {
                // bottom -- right->left (row5)
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i])
                }
                bottom--;
            }

            if (left <= right) {
                // left -- bottom->top (column1)
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left])
                }
                left++;
            }
        }

        return result;
    }
}