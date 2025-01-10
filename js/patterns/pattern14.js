// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// A
// AB
// ABC
// ABCD
// ABCDE

// Print the pattern in the function given to you.

class Solution {
    pattern14(n) {

        for (let i = 1; i <= n; i++) {
            let start = 'A';
            for (let j = 1; j <= i; j++) {
                process.stdout.write(start)
                start = String.fromCharCode(start.charCodeAt(0) + 1);
            }
            console.log()
        }
    }
}