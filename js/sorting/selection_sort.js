// Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.

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

class SelectionSort {
    selectionSort(nums) {
        let n = nums.length;
        let currentIndex = 0;

        while (currentIndex < n) {
            let minElement = nums[currentIndex];
            let minIndex = currentIndex

            for (let i = currentIndex; i < n; i++) {
                if (nums[i] < minElement) {
                    minElement = nums[i]
                    minIndex = i
                }
            }

            [nums[currentIndex], nums[minIndex]] = [nums[minIndex], nums[currentIndex]];

            currentIndex++;
        }

        return nums;
    }
}