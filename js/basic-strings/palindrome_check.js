// You are given a string s. Return true if the string is palindrome, otherwise false. A string is called palindrome if it reads the same forward and backward.

// ! Examples:

// Input : s = "hannah"
// Output : true
// Explanation : The given string when read backward is -> "hannah", which is same as when read forward.
// Hence answer is true.

// Input : s = "aabbaaa"
// Output : false
// Explanation : The given string when read backward is -> "aaabbaa", which is not same as when read forward.
// Hence answer is false.

// Input : s = "aabbccbbaa"
// Output: true

// ! Constraints:
// 1 <= s.length <= 105
// s consist of only uppercase and lowercase English characters.

class PalindromeCheck {
    palindromeCheck(s) {
        let n = s.length;
        let left = 0;
        let right = n - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--
        }

        return true;
    }
}