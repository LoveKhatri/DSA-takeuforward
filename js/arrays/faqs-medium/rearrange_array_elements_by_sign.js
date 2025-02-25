// Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

// Examples:

// Input : nums = [2, 4, 5, -1, -3, -4]
// Output : [2, -1, 4, -3, 5, -4]
// Explanation: The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 maintain their relative positions

// Input : nums = [1, -1, -3, -4, 2, 3]
// Output : [1, -1, 2, -3, 3, -4]
// Explanation: The positive number 1, 2, 3 maintain their relative positions and -1, -3, -4 maintain their relative positions

// Input: nums = [-4, 4, -4, 4, -4, 4]
// Output: [4, -4, 4, -4, 4, -4]

// Constraints:
// 2 <= nums.length <= 105
// 1 <= | nums[i] | <= 104
// nums.length is an even number.
// Number of positive and negative numbers are equal.

// Hint 1
// Extract positive and negative integers into two separate arrays while preserving their relative order. Iterate through the positive and negative arrays simultaneously, alternately adding elements from each to the result array.

// Hint 2
// Use two indices to track the position in the positive and negative arrays during merging.

class RearrangeArrayElementsBySign {
    rearrangeArray(nums) {
        const N = nums.length;

        let result = [];

        let pos = 0;
        let neg = 1;

        for (let i = 0; i < N; i++) {
            if (nums[i] < 0) {
                result[neg] = nums[i]
                neg += 2;
            } else {
                result[pos] = nums[i];
                pos += 2;
            }

        }

        return result;
    }
}