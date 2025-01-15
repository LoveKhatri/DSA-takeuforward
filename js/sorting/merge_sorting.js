// Given an array of integers, nums,sort the array in non-decreasing order using the merge sort algorithm. Return the sorted array.

// A sorted array in non-decreasing order is one in which each element is either greater than or equal to all the elements to its left in the array.

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
// 1 <= nums.length <= 10^6
// -10^4 <= nums[i] <= 10^4
// nums[i] may contain duplicate values.

class MergeSorting {
    mergeSort(nums) {
        this.m(nums, 0, nums.length - 1);

        return nums
    }

    m(arr, low, high) {
        if (low >= high) return;

        let mid = Math.floor((low + high) / 2)

        this.m(arr, low, mid);
        this.m(arr, mid + 1, high);

        this.merge(arr, low, mid, high)
    }

    merge(arr, low, mid, high) {
        let temp = [];

        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }
}