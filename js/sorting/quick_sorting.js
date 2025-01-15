// Given an array of integers called nums, sort the array in non-decreasing order using the quick sort algorithm and return the sorted array.

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
// Output: [2, 3, 3, 4, 5]

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// nums[i] may contain duplicate values.

class QuickSorting {
    quickSort(nums) {
        this.qs(nums, 0, nums.length - 1);

        return nums;
    }

    qs(arr, low, high) {
        if (low < high) {
            let partitionIndex = this.partition(arr, low, high);

            this.qs(arr, low, partitionIndex - 1);
            this.qs(arr, partitionIndex + 1, high);
        }
    }

    partition(arr, low, high) {
        let pivot = arr[low];
        let i = low;
        let j = high;

        while (i < j) {
            while (arr[i] <= pivot && i <= high - 1) {
                i++;
            }

            while (arr[j] > pivot && j >= low + 1) {
                j--;
            }

            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }

        [arr[low], arr[j]] = [arr[j], arr[low]];
        return j;
    }
}