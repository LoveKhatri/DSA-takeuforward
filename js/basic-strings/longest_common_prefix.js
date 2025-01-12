// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// ! Examples:

// Input : str = ["flowers" , "flow" , "fly", "flight" ]
// Output : "fl"
// Explanation : All strings given in array contains common prefix "fl".

// Input : str = ["dog" , "cat" , "animal", "monkey" ]
// Output : ""
// Explanation : There is no common prefix among the given strings in array.

// Input : str = ["lady" , "lazy"]
// Output: 4

// ! Constraints:
// 1 <= str.length <= 200
// 1 <= str[i].length <= 200
// str[i] contains only lowercase English letters.

class LongestCommonPrefix {
    longestCommonPrefix(s) {
        let n = s.length;
        if (n == 0) return "";

        s.sort();

        let ans = ""
        let first = s[0];
        let last = s[n - 1];
        for (let i = 0; i < Math.min(first.length, last.length); i++) {
            if (first[i] != last[i]) {
                break;
            }
            ans += first[i];
        }

        return ans
    }
}