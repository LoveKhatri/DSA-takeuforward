// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// 12345
// 1234
// 123
// 12
// 1

// Print the pattern in the function given to you.

class Solution {
    pattern6(n) {
        for (let i = 0; i < n; i++) {
            for (let j = 1; j <= n - i; j++) {
                process.stdout.write(j.toString())
            }
            console.log("")
        }
    }
}