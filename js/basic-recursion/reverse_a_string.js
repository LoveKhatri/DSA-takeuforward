// Given an input string as an array of characters, write a function that reverses the string.

// ! Examples:

// Input : s = ["h", "e", "l", "l", "o"]
// Output : ["o", "l", "l", "e", "h"]
// Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

// Input : s = ["b", "y", "e" ]
// Output : ["e", "y", "b"]
// Explanation : The given string is s = "bye" and after reversing it becomes s = "eyb".

// Input : s = ["h", "a", "n", "n", "a", "h"]
// Output: 1

// ! Constraints:
// 1 <= s.length <= 10^3
// s consist of only lowercase and uppercase English characters.

class ReverseAString {
    reverseString(s) {
        const rev = (arr, left, right) => {
            if (left >= right) {
                return;
            }

            [arr[left], arr[right]] = [arr[right], arr[left]];

            rev(arr, left + 1, right - 1);
        }

        rev(s, 0, s.length - 1);

        return s
    }
}