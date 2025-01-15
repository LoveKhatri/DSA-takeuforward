// Given a binary array nums, return the maximum number of consecutive 1s in the array.

// A binary array is an array that contains only 0s and 1s.

// ! Examples:

// Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
// Output: 3
// Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s

// Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]
// Output: 0
// Explanation: No 1s are present in nums, thus we return 0

// Input: nums = [1, 0, 1, 1, 1, 0, 1, 1, 1]
// Output: 2

// ! Constraints:
// 1 <= nums.length <= 1^05
// nums[i] is either 0 or 1.

class MaximumConsecutiveOnes {
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let tempMax = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                tempMax++;
                max = Math.max(max, tempMax);
            } else {
                tempMax = 0
            }
        }

        return max;
    }
}