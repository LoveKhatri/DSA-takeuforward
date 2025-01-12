// Given a string, the task is to reverse it. The string is represented by an array of characters s. Perform the reversal in place with O(1) extra memory.

// ! Examples:

// Input : s = ["h", "e" ,"l" ,"l" ,"o"]
// Output : ["o", "l", "l", "e", "h"]
// Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

// Input : s = ["b", "y" ,"e" ]
// Output : ["e", "y", "b"]
// Explanation : The given string is s = "bye" and after reversing it becomes s = "eyb".

// Input : s = ["h", "a" ,"n" ,"n" ,"a", "h"]
// Output: 4

// ! Constraints:
// 1 <= s.length <= 10^5
// s consist of only lowercase and uppercase English characters.

class ReverseAString {
    reverseString(s) {
        let n = s.length;
        let left = 0;
        let right = n - 1;

        while (left < right) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }
}
