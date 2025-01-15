// Given an array of integers nums and an integer target, find the smallest index (0 based indexing) where the target appears in the array. If the target is not found in the array, return -1

// ! Examples:

// Input: nums = [2, 3, 4, 5, 3], target = 3
// Output: 1
// Explanation: The first occurence of 3 in nums is at index 1

// Input: nums = [2, -4, 4, 0, 10], target = 6
// Output: -1
// Explanation: The value 6 does not occur in the array, hence output is -1

// Input: nums = [1, 3, 5, -4, 1], target = 1
// Output: 4

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// -10^4 <= target <= 10^4

class LinearSearch {
    linearSearch(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                return i;
            }
        }

        return -1
    }
}