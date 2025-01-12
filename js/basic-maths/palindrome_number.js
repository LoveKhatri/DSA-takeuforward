// You are given an integer n. You need to check whether the number is a
// palindrome number or not. Return true if it's a palindrome number, otherwise
// return false.

// A palindrome number is a number which reads the same both left to right and
// right to left.

// ! Examples:

// Input: n = 121
// Output: true
// Explanation: When read from left to right : 121.
// When read from right to left : 121.

// Input: n = 123
// Output: false
// Explanation: When read from left to right : 123.
// When read from right to left : 321.

// Input: 101
// Output: true

// ! Constraints:
// 0 <= n <= 5000
// n will contain no leading zeroes except when it is 0 itself.

class PalindromeNumber {
    reverseNumber(n) {
        if (n < 10)
            return n;

        let m = 0;

        while (n > 0) {
            let lastDigit = n % 10;
            m = m * 10 + lastDigit;

            n = Math.floor(n / 10);
        }

        return m;
    }

    isPalindrome(n) {
        return n == this.reverseNumber(n);
    }
}