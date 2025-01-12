// Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.

// The number returned should not have leading zero's. But the given input string may have leading zero.

// ! Examples:

// Input : s = "5347"
// Output : "5347"
// Explanation : The odd numbers formed by given strings are --> 5, 3, 53, 347, 5347.
// So the largest among all the possible odd numbers for given string is 5347.

// Input : s = "0214638"
// Output : "21463"
// Explanation : The different odd numbers that can be formed by the given string are --> 1, 3, 21, 63, 463, 1463, 21463.
// We cannot include 021463 as the number contains leading zero.
// So largest odd number in given string is 21463.

// Input : s = "0032579"
// Output: 2

// ! Constraints:
// 1 <= s.length <= 103
// '0' <= s[i] <= '9'

class LargestOddNumberInAString {
    isOdd(n) {
        return n % 2 == 1;
    }
    largeOddNum(s) {
        let leftIndex = 0;
        let rightIndex = s.length - 1;

        while (rightIndex >= 0) {
            if (this.isOdd(parseInt(s[rightIndex]))) {
                break;
            }
            rightIndex--;
        }

        while (leftIndex < rightIndex) {
            if (parseInt(s[leftIndex]) != 0) {
                break;
            }
            leftIndex++;
        }
        return s.slice(leftIndex, rightIndex + 1);
    }
}