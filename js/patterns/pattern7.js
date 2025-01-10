// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



//     *
//    ***
//   *****
//  *******
// *********


// Print the pattern in the function given to you.

class Solution {
    pattern7(n) {
        for (let i = 1; i <= n; i++) {
            // Spaces
            for (let j = 0; j < n - i; j++) {
                process.stdout.write(" ")
            }

            // Stars
            for (let j = 0; j < 2 * i - 1; j++) {
                process.stdout.write("*")
            }

            // Spaces
            for (let j = 0; j < n - i; j++) {
                process.stdout.write(" ")
            }
            console.log("")
        }
    }
}