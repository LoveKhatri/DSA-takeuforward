// Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.



// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.


// Examples:
// Input: nums = [3, 5, 4, 1, 1]

// Output: [1, 2]

// Explanation: 1 appears two times in the array and 2 is missing from nums

// Input: nums = [1, 2, 3, 6, 7, 5, 7]

// Output: [7, 4]

// Explanation: 7 appears two times in the array and 4 is missing from nums.

// Input: nums = [6, 5, 7, 1, 8, 6, 4, 3, 2]

// Output:
// [6, 9]
// Constraints:
// n == nums.length
// 1 <= n <= 105
// n - 2 elements in nums appear exactly once and are valued between [1, n].
// 1 element in nums appears twice, and is valued between [1, n].

// Hint 1
// The sum of squares of numbers from 1 to n should be (n(n+1)(2n+1))/6. Using this along with the actual sum of squares from the array, we can derive two equations to solve for the missing and duplicate numbers.

// Hint 2
// The XOR approach works because XOR of the same number cancels out (x ^ x = 0), leaving only the difference between the missing and duplicate numbers.

class FindTheRepeatingAndMissingNumber {
    findMissingRepeatingNumbers(nums) {
        const n = nums.length

        let sum = 0;
        let sumN = (n * (n + 1)) / 2;

        let sumSquares = 0;
        let sumNSquares = (n * (n + 1) * (2 * n + 1)) / 6

        for (let i = 0; i < n; i++) {
            sum += nums[i];
            sumSquares += nums[i] * nums[i];
        }

        // Difference between computed sum and sum of N natural Numbers
        let diff = sum - sumN;

        // Difference between computer sum of squares and sum of Squares of N Natural Numbers
        // X^2 - Y^2
        let diffSquares = sumSquares - sumNSquares;

        // Calculate X + Y using X + Y = (X^2 - Y^2) / (X - Y)
        diffSquares = (diffSquares / diff)

        /* Calculate X and Y from X + Y and X - Y
           X = ((X + Y) + (X - Y)) / 2
           Y = X - (X - Y) */
        let x = (diff + diffSquares) / 2;
        let y = x - diff;

        return [Math.floor(x), Math.floor(y)]
    }

    better_findMissingRepeatingNumbers(nums) {
        const n = nums.length;

        let missing = -1;
        let repeated = -1;

        let hashArray = Array(n + 1).fill(0)

        for (let i = 0; i < n; i++) {
            hashArray[nums[i]]++;
        }

        for (let i = 0; i < hashArray.length; i++) {
            if (hashArray[i] == 0) {
                missing = i
            }
            if (hashArray[i] > 1) {
                repeated = i
            }


        }

        return [repeated, missing];
    }

    brute_findMissingRepeatingNumbers(nums) {
        const n = nums.length;

        let missing = -1;
        let repeated = -1;

        // Loop through numbers 1->n 
        // not the indexes of the array
        for (let i = 1; i <= n; i++) {
            let count = 0;

            // Loop through the array to get the count of the current number
            for (let j = 0; j < n; j++) {
                if (i == nums[j]) {
                    count++;
                }
            }

            // If the count is 2 that means the number is repeated
            if (count == 2) {
                repeated = i;
            } else if (count == 0) {
                missing = i
            }

            // If both repeated and missing are found, break out of the loop
            if (repeated !== -1 && missing !== -1) {
                break;
            }
        }

        return [repeated, missing];
    }
}