// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// Print the pattern in the function given to you.

class Solution {
    pattern10(n) {
        this.pattern2(n)
        this.pattern5(n - 1)
    }
    pattern2(n) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= i; j++) {
                process.stdout.write("*")
            }
            console.log("")
        }
    }
    pattern5(n) {
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < n - i + 1; j++) {
                process.stdout.write("*")
            }
            console.log()
        }
    }
}