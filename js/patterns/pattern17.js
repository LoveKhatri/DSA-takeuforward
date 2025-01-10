// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA


// Print the pattern in the function given to you.

class Solution {
    pattern17(n) {
        for (let i = 1; i <= n; i++) {
            let ch = 'A';
            // Spaces
            for (let j = 1; j <= n - i; j++) {
                process.stdout.write(" ")
            }

            // Chars  left
            for (let j = 1; j <= i; j++) {
                process.stdout.write(ch.toString())
                ch = String.fromCharCode(ch.charCodeAt(0) + 1)
            }

            ch = String.fromCharCode(ch.charCodeAt(0) - 2)
            // Chars right
            for (let j = 1; j < i; j++) {
                process.stdout.write(ch.toString())
                ch = String.fromCharCode(ch.charCodeAt(0) - 1)
            }

            // Spaces
            for (let j = 1; j <= n - i; j++) {
                process.stdout.write(" ")
            }

            console.log()
        }
    }
}