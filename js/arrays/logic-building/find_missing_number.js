// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only number missing from the array within this range.


// Examples:
// Input: nums = [0, 2, 3, 1, 4]
// Output: 5
// Explanation: nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]

// Input: nums = [0, 1, 2, 4, 5, 6]
// Output: 3
// Explanation: nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as the only missing number in the range [0, 6]

// Input: nums = [1, 3, 6, 4, 2, 5]
// Output: 0

// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// Hint 1
// "Use the formula for the sum of the first n natural numbers: S= (n×(n+1))/2. Subtract the sum of the array elements from S to find the missing number."

// Hint 2
// Leverage the XOR property: x⊕x=0 and x⊕0=x. XOR all indices and array values; the missing number will be the result.

class FindMissingNumber {
    missingNumber(nums) {
        // OPTIMAL 1
        // let sum = (nums.length * (nums.length + 1)) / 2

        // let arraySum = nums.reduce((acc, num) => acc + num, 0);

        // return sum - arraySum;

        // OPTIMAL 2
        const N = nums.length;

        let xor1 = 0;
        let xor2 = 0;

        for (let i = 0; i < N; i++) {
            xor1 = xor1 ^ (i + 1);
            xor2 = xor2 ^ nums[i];
        }

        return xor1 ^ xor2;
    }
}