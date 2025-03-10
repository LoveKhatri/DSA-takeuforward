// Given an integer n, return the factorial of n.

// Factorial of a non-negative integer, is the multiplication of all integers smaller than or equal to n (use 64-bits to return answer).

// ! Examples:

// Input : n = 3
// Output : 6
// Explanation : Factorial = 1 * 2 * 3 => 6

// Input : n = 5
// Output : 120
// Explanation : Factorial = 1 * 2 * 3 * 4 * 5 => 120

// Input : n = 4
// Output: 3

// ! Constraints:
// 0 <= n <= 15

class FactorialOfAGivenNumber {
    factorial(n) {
        if (n == 1 || n == 0) {
            return 1
        }

        return n * this.factorial(n - 1)
    }
}