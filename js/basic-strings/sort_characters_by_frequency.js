// You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.

// If two or more characters have same frequency then arrange them in alphabetic order.

// ! Examples:

// Input : s = "tree"
// Output : ['e', 'r', 't' ]
// Explanation : The occurrences of each character are as shown below :
// e --> 2
// r --> 1
// t --> 1.
// The r and t have same occurrences , so we arrange them by alphabetic order.

// Input : s = "raaaajj"
// Output : ['a' , 'j', 'r' ]
// Explanation : The occurrences of each character are as shown below :
// a --> 4
// j --> 2
// r --> 1

// Input : s = "bbccddaaa"
// Output: 3

// ! Constraints:
// 1 <= s.length <= 10^5
// s consist of only lowercase English characters.

class SortCharactersByFrequency {
    frequencySort(s) {
        let freqMap = new Map();

        for (let char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1)
        }

        let entries = [...freqMap.entries()];

        entries.sort((a, b) => {
            if (a[1] !== b[1]) return b[1] - a[1];
            return a[0].localeCompare(b[0]);
        })

        return entries.map((a) => a[0])
    }
}