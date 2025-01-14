// Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.

// ! Examples:

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// Input: nums = [5, 4, 4, 1, 1]
// Output: [1, 1, 4, 4, 5]
// Explanation: 1 <= 1 <= 4 <= 4 <= 5.
// Thus the array is sorted in non-decreasing order.

// Input: nums = [3, 2, 3, 4, 5]
// Output: 2

// ! Constraints:
// 1 <= nums.length <= 1000
// -10^4 <= nums[i] <= 10^4
// nums[i] may contain duplicate values.

class BubbleSort {
    bubbleSort(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length - i - 1; j++) {
                if (nums[j + 1] < nums[j]) {
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                }
            }
        }

        return nums
    }
}

let solution = new BubbleSort();

let nums = [7, 4, 1, 5, 3];

console.log("Array Before Using Bubble Sort:", nums);

// Call the bubbleSort function
nums = solution.bubbleSort(nums);

console.log("Array After Using Bubble Sort:", nums);