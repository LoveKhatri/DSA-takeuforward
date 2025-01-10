// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA


// Print the pattern in the function given to you.

class Solution {
    pattern22(n) {
        for (let i = 0; i < 2 * n - 1; i++) {
            for (let j = 0; j < 2 * n - 1; j++) {
                const top = i;
                const left = j;
                const bottom = (2 * n - 2) - i;
                const right = (2 * n - 2) - j;

                process.stdout.write(n - Math.min(Math.min(top, bottom), Math.min(left, right)) + " ");
            }

            process.stdout.write("\n");
        }
    }
}