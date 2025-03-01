// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Examples:

// Input: nums = [2, 3, 5, -2, 7, -4]
// Output: 15
// Explanation: The subarray from index 0 to index 4 has the largest sum = 15

// Input: nums = [-2, -3, -7, -2, -10, -4]
// Output: -2
// Explanation: The element on index 0 or index 3 make up the largest sum when taken as a subarray

// Input: nums = [-1, 2, 3, -1, 2, -6, 5]
// Output: 4

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Hint 1
// "Maintain two variables: currentMax: Tracks the maximum sum ending at the current index. globalMax: Stores the maximum sum seen so far."

// Hint 2
// If adding the current element decreases the sum, start a new subarray from the current element. This happens when the previous sum becomes negative.

class KadanesAlgorithm {
    maxSubArray(nums) {
        let max = -Infinity;
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum > max) {
                max = sum
            }

            if (sum < 0) {
                sum = 0
            }
        }

        return max;
    }

    better_maxSubArray(nums) {
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let sum = 0;
            for (let j = i; j < nums.length; j++) {
                sum += nums[j];
                max = Math.max(max, sum);
            }
        }

        return max;
    }

    brute_maxSubArray(nums) {
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                let sum = 0;

                // The loop below is just to add elements
                // from i -> j
                for (let k = i; k <= j; k++) {
                    sum += nums[k];
                }

                max = Math.max(max, sum);
            }
        }

        return max;
    }
}