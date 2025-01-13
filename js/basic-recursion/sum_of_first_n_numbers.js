// Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.

// ! Examples:

// Input : N = 4
// Output : 10
// Explanation : first four natural numbers are 1, 2, 3, 4.
// Sum is 1 + 2 + 3 + 4 => 10.

// Input : N = 2
// Output : 3
// Explanation : first two natural numbers are 1, 2.
// Sum is 1 + 2 => 3.

// Input : N = 10
// Output: 2

// ! Constraints:
// 1 <= N <= 10^3

class SumOfFirstNNumbers {
    NnumbersSum(N) {
        if (N == 0) {
            return 0;
        }

        return N + this.NnumbersSum(N - 1)
    }
}