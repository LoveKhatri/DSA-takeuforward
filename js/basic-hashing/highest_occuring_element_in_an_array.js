// Given an array of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.

// Please note that this section might seem a bit difficult without prior knowledge on what hashing is, we will soon try to add basics concepts for your ease! If you know the concepts already please go ahead to give a shot to the problem. Cheers!

// ! Examples:

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 3
// Explanation: The number 3 appears the most (3 times). It is the most frequent element.

// Input: arr = [4, 4, 5, 5, 6]
// Output: 4
// Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element.

// Input: arr = [10, 9 ,7]
// Output: 2

// ! Constraints:
// 1 <= n <= 10^5
// 1 <= arr[i] <= 10^4

class HighestOccuringElementInAnArray {
    mostFrequentElement(nums) {
        // Getting the largest element of the array;
        let largest = nums[0];
        for (let i = 0; i < nums.length; i++) {
            largest = Math.max(largest, nums[i])
        }

        // Making the array
        let visitedArray = new Array(largest + 1).fill(0);

        for (let i = 0; i < nums.length; i++) {
            visitedArray[nums[i]] += 1;
        }

        let maxFreq = 0;
        let element = nums[0];

        for (let i = 0; i < largest + 1; i++) {
            if (visitedArray[i] > maxFreq) {
                maxFreq = visitedArray[i];
                element = i;
            }
        }

        return element;
    }
}