// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// *****
// *****
// *****
// *****
// *****

// Print the pattern in the function given to you.

class Solution {
    pattern1(n) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                process.stdout.write("*")
            }
            process.stdout.write("\n")
        }
    }
}