// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// A
// BB
// CCC
// DDDD
// EEEEE

// Print the pattern in the function given to you.

class Solution {
    pattern16(n) {
        let ch = 'A';
        for (let i = 1; i <= n; i++) {

            for (let j = 1; j <= i; j++) {
                process.stdout.write(ch.toString())
            }
            ch = String.fromCharCode(ch.charCodeAt(0) + 1)

            console.log()
        }
    }
}