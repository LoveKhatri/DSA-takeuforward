// You are given an integer n. Return the integer formed by placing the digits
// of n in reverse order.

// ! Examples:

// Input: n = 25
// Output: 52
// Explanation: Reverse of 25 is 52.

// Input: n = 123
// Output: 321
// Explanation: Reverse of 123 is 321.

// Input: n = 54
// Output:
// 45

// ! Constraints:
// 0 <= n <= 5000
// n will contain no leading zeroes except when it is 0 itself.

class ReverseANumber {
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
}