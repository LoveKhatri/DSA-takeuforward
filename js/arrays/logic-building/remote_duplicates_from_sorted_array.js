// Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique element appears only once. Return the number of unique elements in the array.

// If the number of unique elements be k, then,

// Change the array nums such that the first k elements of nums contain the unique values in the order that they were present originally.
// The remaining elements, as well as the size of the array does not matter in terms of correctness.

// An array sorted in non-decreasing order is an array where every element to the right of an element in either equal to or greater in value than that element.


// ! Examples:

// Input: nums = [0, 0, 3, 3, 5, 6]
// Output: [0, 3, 5, 6, _, _]
// Explanation: There are 4 distinct elements in nums and the elements marked as _ can have any value.

// Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5]
// Output: [-2, 2, 4, 5, _, _, _, _]
// Explanation: There are 4 distinct elements in nums and the elements marked as _ can have any value.

// Input: nums = [-30, -30, 0, 0, 10, 20, 30, 30]
// Output: 2

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// nums is sorted in non-decreasing order.

class RemoveDuplicatesFromSortedArray {
    removeDuplicates(nums) {
        const s = new Set();

        for (let num of nums) {
            s.add(num)
        }

        let size = s.size;

        let j = 0;

        for (let val of s) {
            nums[j++] = val;
        }

        return size
    }
}