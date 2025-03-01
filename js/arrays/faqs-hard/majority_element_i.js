// Given an integer array nums of size n, return the majority element of the array.

// The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.

// Examples:

// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
// Output: 7
// Explanation: The number 7 appears 5 times in the 9 sized array

// Input: nums = [1, 1, 1, 2, 1, 2]
// Output: 1
// Explanation: The number 1 appears 4 times in the 6 sized array

// Input: nums = [-1, -1, -1, -1]
// Output: 3

// Constraints:
// n == nums.length.
// 1 <= n <= 105
// -104 <= nums[i] <= 104
// One value appears more than n/2 times.

// Hint 1
// Keep a count variable while iterating, Increase count when encountering the same candidate. Decrease count when encountering a different number. If count == 0, change candidate. The final candidate will be the majority element.

// Hint 2
// Recursively split the array into halves, find the majority element in each half, if both halves agree, return that element.

class MajorityElementI {
    majorityElement(nums) {
        let count = 0;
        let el;

        for (let i = 0; i < nums.length; i++) {
            if (count == 0) {
                count = 1;
                el = nums[i];
            } else if (nums[i] == el) {
                count++;
            } else {
                count--;
            }
        }

        let elCount = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == el) {
                elCount++;
            }
        }

        if (elCount > Math.floor(nums.length / 2)) {
            return el
        }

        return -1;
    }

    better_majorityElement(nums) {
        let hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (hashMap.has(nums[i])) {
                hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
            } else {
                hashMap.set(nums[i], 1)
            }

            if (hashMap.has(nums[i]) && (hashMap.get(nums[i]) > Math.floor(nums.length / 2))) {
                return nums[i]
            }
        }

        return -1;
    }

    brute_majorityElement(nums) {
        for (let i = 0; i < nums.length; i++) {
            let count = 0;
            let currentElement = nums[i];

            for (let j = 0; j < nums.length; j++) {
                if (nums[j] == currentElement) {
                    count++;
                }
            }

            if (Math.floor(nums.length / 2) < count) {
                return currentElement
            }
        }

        return -1;
    }
}