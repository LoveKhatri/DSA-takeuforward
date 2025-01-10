// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA


// Print the pattern in the function given to you.

class Solution {
    pattern18(n) {
        for (let i = 0; i < n; i++) {
            const el = (('A'.charCodeAt(0) + n - 1) - i);

            for (let ch = el; ch <= ('A'.charCodeAt(0) + n - 1); ch++) {
                process.stdout.write(String.fromCharCode(ch) + " ");
            }

            console.log()
        }
    }
}