// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15

// Print the pattern in the function given to you.

class Solution {
    pattern13(n) {
        let start = 1;
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                process.stdout.write(start.toString() + " ")
                start++;
            }

            console.log()
        }
    }
}