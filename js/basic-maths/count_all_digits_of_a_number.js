// You are given an integer n. You need to return the number of digits in the number.

// The number will have no leading zeroes, except when the number is 0 itself.

// ! Examples:

// Input: n = 4
// Output: 1
// Explanation: There is only 1 digit in 4.

// Input: n = 14
// Output: 2
// Explanation: There are 2 digits in 14.

// ! Constraints:
// 0 <= n <= 5000
// n will contain no leading zeroes except when it is 0 itself.

class CountAllDigitsOfANumber {
    countDigit(n) {
        if (n == 0) {
            return 1;
        }
        let count = 0;

        while (n > 0) {
            n = Math.floor(n / 10);
            count += 1;
        }

        return count;
    }
}