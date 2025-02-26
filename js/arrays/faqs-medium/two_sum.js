// Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.



// Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.


// Examples:
// Input: nums = [1, 6, 2, 10, 3], target = 7

// Output: [0, 1]

// Explanation: nums[0] + nums[1] = 1 + 6 = 7

// Input: nums = [1, 3, 5, -7, 6, -3], target = 0

// Output: [1, 5]

// Explanation: nums[1] + nums[5] = 3 + (-3) = 0

// Input: nums = [-6, 7, 1, -7, 6, 2], target = 3

// Output:
// [2, 5]
// Constraints:
// 2 <= nums.length <= 105
// -104 <= nums[i] <= 104
// -105 <= target <= 105
// Only one valid answer exists.

// Hint 1
// Use a hash map (dictionary) to store the indices of elements as you iterate through the array. This allows for efficient lookups of the complement (i.e., target−current element).

// Hint 2
// Alternatively, use two pointers, one starts at the beginning (smallest element) and the other at the end (largest element) of the sorted array.If the sum of the elements at the two pointers is less than the target, move the left pointer to the right. If the sum is greater than the target, move the right pointer to the left.


class TwoSum {
    twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        const els = nums.map((el, index) => [el, index]);
        els.sort((a, b) => a[0] - b[0]);

        while (left < right) {
            const sum = els[left][0] + els[right][0]

            if (sum == target) {
                return [els[left][1], els[right][1]];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return [-1, -1]
    }

    better_twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            let remaining = target - nums[i];

            if (map.has(remaining)) {
                return [i, map.get(remaining)]
            }

            map.set(current, i)
        }

        return [-1, -1];
    }

    brute_twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j]
                }
            }
        }

        return [-1, -1];
    }
}