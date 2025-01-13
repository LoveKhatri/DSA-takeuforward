// Given an array nums of n integers, return reverse of the array.

// ! Examples:

// Input : nums = [1, 2, 3, 4, 5]
// Output : [5, 4, 3, 2, 1]

// Input : nums = [1, 3, 3, 3, 5]
// Output : [5, 3, 3, 3, 1]

// Input : nums = [1, 2, 1]
// Output: 1

// ! Constraints:
// 1 <= n <= 100
// 1 <= nums[i] <= 100

class ReverseAnArray {
    reverseArray(nums) {
        const rev = (arr, left, right) => {
            if (left >= right) {
                return;
            }

            [arr[left], arr[right]] = [arr[right], arr[left]];

            rev(arr, left + 1, right - 1)
        }

        rev(nums, 0, nums.length - 1)

        return nums
    }
}