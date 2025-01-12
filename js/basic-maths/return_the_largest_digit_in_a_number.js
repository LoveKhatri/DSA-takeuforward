// You are given an integer n. Return the largest digit present in the number.

// ! Examples:

// Input: n = 25
// Output: 5
// Explanation: The largest digit in 25 is 5.

// Input: n = 99
// Output: 9
// Explanation: The largest digit in 99 is 9.

// Input: n = 1
// Output: 1

// ! Constraints:
// 0 <= n <= 5000
// n will contain no leading zeroes except when it is 0 itself.

class ReturnTheLargestDigitInANumber {
    largestDigit(n) {
        let l = 0;

        while (n > 0) {
            let d = n % 10;
            if (d > l) {
                l = d;
            }

            n = Math.floor(n / 10);
        }

        return l;
    }
}