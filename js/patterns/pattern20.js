// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA


// Print the pattern in the function given to you.

class Solution {
    pattern20(n) {
        // Upper Half
        for (let i = 0; i < n; i++) {
            // Stars
            for (let j = 0; j < i + 1; j++) {
                process.stdout.write("*");
            }
            // Spaces
            for (let j = 0; j < (n - (i + 1)) * 2; j++) {
                process.stdout.write(" ");
            }
            // Stars
            for (let j = 0; j < i + 1; j++) {
                process.stdout.write("*");
            }

            console.log();
        }

        // Lower Half
        for (let i = 0; i < n - 1; i++) {
            // Stars
            for (let j = 0; j < n - i - 1; j++) {
                process.stdout.write("*");
            }
            // Spaces
            for (let j = 0; j < 2 * (i + 1); j++) {
                process.stdout.write(" ");
            }
            // Stars
            for (let j = 0; j < n - i - 1; j++) {
                process.stdout.write("*");
            }

            console.log();
        }
    }
}