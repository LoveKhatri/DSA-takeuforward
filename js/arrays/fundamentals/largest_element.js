// Given an array of integers nums, return the value of the largest element in the array

// ! Examples:

// Input: nums = [3, 3, 6, 1]
// Output: 6
// Explanation: The largest element in array is 6

// Input: nums = [3, 3, 0, 99, -40]
// Output: 99
// Explanation: The largest element in array is 99

// Input: nums = [-4, -3, 0, 1, -8]
// Output: 3

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// nums may contain duplicate elements.

class LargestElement {
    largestElement(nums) {
        let largest = nums[0];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > largest) {
                largest = nums[i]
            }
        }

        return largest;
    }
}