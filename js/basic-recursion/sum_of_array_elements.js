// Given an array nums, find the sum of elements of array using recursion.

// ! Examples:

// Input : nums = [1, 2, 3]
// Output : 6
// Explanation : The sum of elements of array is 1 + 2 + 3 => 6.

// Input : nums = [5, 8, 1]
// Output : 14
// Explanation : The sum of elements of array is 5 + 8 + 1 => 14.

// Input : nums = [12, 9, 17]
// Output: 4

// ! Constraints:
// 1 <= n <= 100
// 1 <= nums[i] <= 100

class SumOfArrayElements {
    arraySum(nums) {
        if (!nums.length) {
            return 0
        }
        return nums[0] + this.arraySum(nums.slice(1))
    }
}