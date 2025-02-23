// Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same. This must be done in place, without making a copy of the array.


// Examples:

// Input: nums = [0, 1, 4, 0, 5, 2]
// Output: [1, 4, 5, 2, 0, 0]
// Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same

// Input: nums = [0, 0, 0, 1, 3, -2]
// Output: [1, 3, -2, 0, 0, 0]
// Explanation: All 3 zeroes are moved to the end and the order of the other elements stay the same

// Input: nums = [0, 20, 0, -20, 0, 20]
// Output: [20, -20, 20, 0, 0, 0]

// Constraints:
// 1 <= nums.length <= 105
// -104 <=nums[i] <= 104

// Hint 1
// Use two pointers to iterate through the array. One pointer keeps track of the current position, and the other identifies where the next non-zero element should go.

// Hint 2
// Focus on swapping non-zero elements to the front while keeping track of the current index for placing zeros at the end. Avoid creating a new array by modifying the original array directly. Shift non-zero elements left and fill zeros at the end.

class MoveZerosToEnd {
    moveZeroes(nums) {
        let j = -1;

        // This loop is just to find the first occurence of 0
        for (let i = 0; i < nums.length; i++) {
            // Check if current element is 0, if it is then j points to this position
            if (nums[i] == 0) {
                j = i;
                break;
            }
        }

        if (j == -1) {
            return nums;
        }

        for (let i = j + 1; i < nums.length; i++) {
            if (nums[i] !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                j++
            }
        }

        return nums;
    }
}