// You are given an integer n. You need to find out the number of prime numbers
// in the range [1, n] (inclusive). Return the number of prime numbers in the
// range.

// A prime number is a number which has no divisors except, 1 and itself.

// ! Examples:

// Input: n = 6
// Output: 3
// Explanation: Prime numbers in the range [1, 6] are 2, 3, 5.

// Input: n = 10
// Output: 4
// Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

// Input: n = 20
// Output: 8

// ! Constraints:
// 2 <= n <= 1000

class CountOfPrimeNumbersTillN {
    isPrime(n) {
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    primeUptoN(n) {
        let count = 0;

        for (let i = 2; i <= n; i++) {
            if (this.isPrime(i))
                count++;
        }

        return count;
    }
}