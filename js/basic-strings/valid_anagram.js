// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// ! Examples:

// Input : s = "anagram" , t = "nagaram"
// Output : true
// Explanation : We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same.

// Input : s = "dog" , t = "cat"
// Output : false
// Explanation : We cannot rearrange the characters of string s to get string t as frequency of all characters from both strings is not same.

// Input : s = "eat" , t = "tea"
// Output: 1

// ! Constraints:
// 1 <= s.length , t.length <= 5*104
// s and t consist of only lowercase English letters

class ValidAnagram {
    anagramStrings(s, t) {
        return s.split('').sort().join('') == t.split('').sort().join('');
    }
}