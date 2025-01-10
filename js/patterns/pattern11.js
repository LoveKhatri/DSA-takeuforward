// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1

// Print the pattern in the function given to you.

class Solution {
    pattern11(n) {
        for (let i = 1; i <= n; i++) {
            let start = 1;
            if (i % 2 == 0) start = 0;
            for (let j = 1; j <= i; j++) {
                process.stdout.write(start.toString() + " ")
                if (start == 0) start = 1
                else start = 0
            }

            console.log()
        }
    }
}