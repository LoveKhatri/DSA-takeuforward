// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

// ! Examples:

// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation: The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]
// Output: -1
// Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned

// Input: nums = [7, 7, 2, 2, 10, 10, 10]
// Output: 3

// ! Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// nums may contain duplicate elements.

class SecondLargestElement {
    secondLargestElement(arr) {
        let largest = -Infinity;
        let secondLargest = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] !== largest) {
                secondLargest = arr[i];
            }
        }

        return secondLargest === -Infinity ? -1 : secondLargest;
    }
}