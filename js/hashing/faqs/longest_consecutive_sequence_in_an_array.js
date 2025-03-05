// Given an array nums of n integers, return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.


// Examples:
// Input: nums = [100, 4, 200, 1, 3, 2]

// Output: 4

// Explanation: The longest sequence of consecutive elements in the array is [1, 2, 3, 4], which has a length of 4. This sequence can be formed regardless of the initial order of the elements in the array.

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

// Output: 9

// Explanation: The longest sequence of consecutive elements in the array is [0, 1, 2, 3, 4, 5, 6, 7, 8], which has a length of 9. 

// Input: nums = [1, 9, 3, 10, 4, 20, 2]

// Output:
// 4
// Constraints:
//      1 <= nums.length <= 105
//      -109 <= nums[i] <= 109

// Hint 1
// Use a hash set to store all elements of the array. Iterate through the array, and for each element, check if it is the start of a sequence by ensuring that num−1 is not in the set.

// Hint 2
// For each starting number, count the length of the consecutive sequence by checking for num+1, num+2, etc., in the set. Maintain a variable to store the length of the longest sequence encountered during the traversal.

class LongestConsecutiveSequenceInAnArray {
    longestConsecutive(nums) {
        const n = nums.length;
        nums.sort((a, b) => a - b);

        let longest = 1;
        let count = 0

        let prev = -Infinity;

        for (let i = 0; i < n; i++) {
            if (nums[i] - 1 === prev) {
                prev = nums[i];
                count++;
            } else if (nums[i] !== prev) {
                count = 1;
                prev = nums[i];
            }

            longest = Math.max(count, longest);
        }

        return longest
    }

    brute_longestConsecutive(nums) {
        const n = nums.length;

        let longest = 1;

        for (let i = 0; i < n; i++) {
            let current = nums[i];
            let count = 1;
            while (this.linearSearch(nums, current + 1)) {
                count++;
                current++;
            }

            longest = Math.max(longest, count)
        }

        return longest;
    }

    linearSearch(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return true
            }
        }

        return false
    }
}