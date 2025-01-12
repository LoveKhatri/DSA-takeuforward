// You are given an integer n. Return the value of n! or n factorial.

// Factorial of a number is the product of all positive integers less than or
// equal to that number.

// ! Examples:

// Input: n = 2
// Output: 2
// Explanation: 2! = 1 * 2 = 2.

// Input: n = 0
// Output: 1
// Explanation: 0! is defined as 1.

// Input: 3
// Output: 6

// ! Constraints:
// 0 <= n <= 10

class FactorialOfAGivenNumber {
    factorial(n) {
        let r = 1;
        let c = 1;
        while (c <= n) {
            r = r * c;
            c++;
        }

        return r;
    }
}