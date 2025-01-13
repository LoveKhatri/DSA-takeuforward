// Given a string s, return true if the string is palindrome, otherwise false.

// A string is called palindrome if it reads the same forward and backward.

// ! Examples:

// Input : s = "hannah"
// Output : true
// Explanation : The string when reversed is --> "hannah", which is same as original string , so we return true.

// Input : s = "aabbaaa"
// Output : false
// Explanation : The string when reversed is --> "aaabbaa", which is not same as original string, So we return false.

// Input : s = "aabbcccdbbaa"
// Output: 2

// ! Constraints:
// 1 <= s.length <= 10^3
// s consist of only uppercase and lowercase English characters.

class CheckIfStringIsPalindromeOrNot {
    palindromeCheck(s) {
        const rev = (arr, left, right) => {
            if (left >= right) {
                return true;
            }

            if (arr[left] != arr[right]) {
                return false
            };

            return rev(arr, left + 1, right - 1);
        }

        return rev(s, 0, s.length - 1)
    }
}