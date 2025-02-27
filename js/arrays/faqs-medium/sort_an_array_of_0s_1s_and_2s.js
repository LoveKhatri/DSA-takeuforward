// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.


// Examples:
// Input: nums = [1, 0, 2, 1, 0]

// Output: [0, 0, 1, 1, 2]

// Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// Input: nums = [0, 0, 1, 1, 1]

// Output: [0, 0, 1, 1, 1]

// Explanation: The nums array in sorted order has 2 zeroes, 3 ones and zero twos

// Input: nums = [1, 1, 2, 2, 1]

// Output:
// 1
// Constraints:
// 1 <= nums.length <= 105
// nums consists of 0, 1 and 2 only.

// Hint 1
// "Use three pointers (low, mid, and high) to partition the array into three regions: Elements less than 1 (0) are moved to the left (region of 0s). Elements equal to 1 are in the middle. Elements greater than 1 (2) are moved to the right (region of 2s)."

// Hint 2
// "If the element at mid is 0, swap it with the element at low and move both pointers forward. If the element at mid is 1, move the mid pointer forward. If the element at mid is 2, swap it with the element at high and move high backward."

class SortAnArrayOf0s1sAnd2s {
    sortZeroOneTwo(nums) {
        const n = nums.length;

        let low = 0;
        let mid = 0;
        let high = n - 1;

        while (mid <= high) {
            if (nums[mid] == 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
            }
        }
    }

    better_sortZeroOneTwo(nums) {
        let [zeros, ones, twos] = [0, 0, 0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                zeros++;
            } else if (nums[i] == 1) {
                ones++;
            } else {
                twos++;
            }
        }
        for (let i = 0; i < zeros; i++) {
            nums[i] = 0
        }

        for (let i = zeros; i < zeros + ones; i++) {
            nums[i] = 1
        }

        for (let i = zeros + ones; i < zeros + ones + twos; i++) {
            nums[i] = 2
        }
    }
}