// Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// ! Examples:

// Input : s = "egg" , t = "add"
// Output : true
// Explanation : The 'e' in string s can be replaced with 'a' of string t.
// The 'g' in string s can be replaced with 'd' of t.
// Hence all characters in s can be replaced to get t.

// Input : s = "apple" , t = "bbnbm"
// Output : false
// Explanation : The 'a' in string s can be replaced with 'n' of string t.
// The 'p' in string s can be replaced by 'b' of string t.
// The 'l' in string s can be replaced by 'm' of string t.
// The 'e' in string s cannot be replaced by any character of string t as all the characters in string t are already mapped.
// Hence all characters in s cannot be replaced to get t.

// Input : s = "paper" , t = "title"
// Output: 1

// ! Constraints:
// 1 <= s.length <= 103
// s.length == t.length
// s and t consist of only lowercase English letters.

class IsomorphicString {
    isomorphicString(s, t) {
        s = s.split('')
        t = t.split('')

        if (s.length !== t.length) return false;

        let map = new Map();

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            let found = map.get(char);
            if (found) {
                s[i] = found
            }
            else {
                let oppChar = t[i];
                map.set(char, oppChar);
                s[i] = oppChar
            }
        }

        return s.join('') == t.join('');
    }
}