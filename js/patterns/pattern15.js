// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// ABCDE
// ABCD
// ABC
// AB
// A

// Print the pattern in the function given to you.

class Solution {
    pattern15(n) {
        for (let i = n; i >= 1; i--) {
            let ch = 'A';

            for (let j = i; j >= 1; j--) {
                process.stdout.write(ch.toString())
                ch = String.fromCharCode(ch.charCodeAt(0) + 1)
            }

            console.log()
        }
    }
}