// Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.

// Examples:

// Input : nums = [1, 2, 3, 4, 5]
// Output : true
// Explanation : For all i (1 <= i <= 4) it holds nums[i] <= nums[i+1], hence it is sorted and we return true.

// Input : nums = [1, 2, 1, 4, 5]
// Output : false
// Explanation : For i == 2 it does not hold nums[i] <= nums[i+1], hence it is not sorted and we return false.

// Input : nums = [1,9,6,8,5,4,0]
// Output: 2

// Constraints:
// 1 <= n <= 100
// 1 <= nums[i] <= 100

class CheckIfArrayIsSorted {
    isSorted(nums) {
        const fn = (arr, index) => {
            if (index >= arr.length - 1) {
                return true
            }

            if (arr[index + 1] && arr[index] > arr[index + 1]) {
                return false;
            }

            return fn(arr, index + 1)
        }

        return fn(nums, 0)
    }
}