// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA


// Print the pattern in the function given to you.

class Solution {
    pattern21(n) {
        for (let i = 0; i < n; i++) {
            if (i == 0 || i == n - 1) {
                for (let j = 0; j < n; j++) {
                    process.stdout.write("*");
                }
            } else {
                for (let j = 0; j < n; j++) {
                    if (j == 0 || j == n - 1) {
                        process.stdout.write("*");
                    } else {
                        process.stdout.write(" ");
                    }
                }
            }

            process.stdout.write("\n");
        }
    }
}