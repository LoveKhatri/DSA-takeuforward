// Given an integer array nums, rotate the array to the left by one.

// ! Examples:

// Input: nums = [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, 1]
// Explanation: Initially, nums = [1, 2, 3, 4, 5]
// Rotating once to left -> nums = [2, 3, 4, 5, 1]

// Input: nums = [-1, 0, 3, 6]
// Output: [0, 3, 6, -1]
// Explanation: Initially, nums = [-1, 0, 3, 6]
// Rotating once to left -> nums = [0, 3, 6, -1]

// Input: nums = [7, 6, 5, 4]
// Output: 3

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

class LeftRotateArrayByOne {
    rotateArrayByOne(nums) {
        let temp = nums[0];

        for (let i = 0; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1];
        }

        nums[nums.length - 1] = temp;

        return nums
    }
}