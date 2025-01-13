// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

// ! Examples:

// Input : n = 2
// Output : 1
// Explanation : F(2) = F(1) + F(0) => 1 + 0 => 1.

// Input : n = 3
// Output : 2
// Explanation : F(3) = F(2) + F(1) => 1 + 1 => 2.

// Input : n = 6
// Output: 4

// ! Constraints:
// 0 <= n <= 19

class FibonacciNumber {
    fib(n) {
        const map = new Map();

        const fn = (num) => {
            if (num === 0) return 0;
            if (num === 1) return 1;

            if (map.has(num)) return map.get(num);

            const result = fn(num - 1) + fn(num - 2);
            map.set(num, result);
            return result;
        };

        return fn(n);
    }

    // fib(n) {
    //     if (n <= 0) return 0;
    //     if (n == 1) return 1;
    //     return this.fib(n - 1) + this.fib(n - 2)
    // }
}