// Given an integer array nums, return a list of all the leaders in the array.

// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.

// Examples:
// Input: nums = [1, 2, 5, 3, 1, 2]
// Output: [5, 3, 2]
// Explanation: 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

// Input: nums = [-3, 4, 5, 1, -4, -5]
// Output: [5, 1, -4, -5]
// Explanation: -5 is the rightmost element, -4 is the largest element in the index range [4, 5], 1 is the largest element in the index range [3, 5] and 5 is the largest element in the range [2, 5]

// Input: nums = [-3, 4, 5, 1, -30, -10]
// Output: 3

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Hint 1
// Traverse the array from right to left, as the rightmost element is always a leader and gives a starting point for comparison. Maintain a variable to keep track of the maximum value encountered so far during the traversal. An element is a leader if it is greater than this maximum.

// Hint 2
// As you identify leaders while traversing from right to left, add them to a temporary list and reverse it at the end to preserve the original order.

class LeadersInAnArray {
    leaders(nums) {
        const N = nums.length;
        if (N == 0) {
            return nums
        }

        let max = nums[N - 1];
        let result = [nums[N - 1]];


        for (let i = N - 2; i >= 0; i--) {
            // re-assign max number
            if (nums[i] > max) {
                max = nums[i];
                result.push(max);
            }

        }

        return result.reverse();
    }
    brute_leaders(nums) {
        let result = [];
        const N = nums.length;

        // Go through all the elements in the array
        for (let i = 0; i < N; i++) {
            // variable used to indicate whether 
            // a number greater than the current number
            // is found in the nested loop
            let leader = true;

            for (let j = i; j < N; j++) {
                // if the current element is smaller
                // than the traversed element
                if (nums[i] < nums[j]) {
                    leader = false;
                    break;
                }
            }

            // if leader is 0 that means, all elements 
            // after the current element were smaller
            if (leader == true) {
                result.push(nums[i]);
            }
        }

        return result;
    }
}