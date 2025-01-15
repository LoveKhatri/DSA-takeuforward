// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

// ! Examples:

// Input: nums = [1, 2, 3, 4, 5, 6], k = 2
// Output: nums = [3, 4, 5, 6, 1, 2]
// Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
// rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]

// Input: nums = [3, 4, 1, 5, 3, -5], k = 8
// Output: nums = [1, 5, 3, -5, 3, 4]
// Explanation: rotate 1 step to the left: [4, 1, 5, 3, -5, 3]
// rotate 2 steps to the left: [1, 5, 3, -5, 3, 4]
// rotate 3 steps to the left: [5, 3, -5, 3, 4, 1]
// rotate 4 steps to the left: [3, -5, 3, 4, 1, 5]
// rotate 5 steps to the left: [-5, 3, 4, 1, 5, 3]
// rotate 6 steps to the left: [3, 4, 1, 5, 3, -5]
// rotate 7 steps to the left: [4, 1, 5, 3, -5, 3]
// rotate 8 steps to the left: [1, 5, 3, -5, 3, 4]

// Input: nums = [1, 2, 3, 4, 5], k = 4
// Output: [5, 1, 2, 3, 4]

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 0 <= k <= 10^5

class LeftRotateArrayByKPlaces {
    rotateArray(nums, k) {
        let n = nums.length;

        k = k % n;

        let temp = [];
        for (let i = 0; i < k; i++) {
            temp[i] = nums[i]
        }

        for (let i = k; i < n; i++) {
            nums[i - k] = nums[i];
        }

        for (let i = n - k; i < n; i++) {
            nums[i] = temp[i - (n - k)]
        }

        return nums;
    }
}