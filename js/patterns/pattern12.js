// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

// Print the pattern in the function given to you.

class Solution {
    pattern12(n) {
        for (let i = 1; i <= n; i++) {
            // Numbers
            for (let j = 1; j <= i; j++) {
                process.stdout.write(j.toString())
            }

            // Spaces
            for (let j = 1; j <= 2 * (n - i); j++) {
                process.stdout.write(" ")
            }

            for (let j = i; j >= 1; j--) {
                process.stdout.write(j.toString())
            }

            console.log("")
        }
    }
}