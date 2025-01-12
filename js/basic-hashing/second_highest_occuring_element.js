// Given an array of n integers, find the second most frequent element in it. If there are multiple elements that appear a maximum number of times, find the smallest of them. If second most frequent element does not exist return -1.

// ! Examples:

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 2
// Explanation: The number 2 appears the second most (2 times) and number 3 appears the most(3 times).

// Input: arr = [4, 4, 5, 5, 6, 7]
// Output: 6
// Explanation: Both 6 and 7 appear second most times, but 6 is smaller.

// Input: arr = [10, 9 ,7, 7]
// Output: 1

// ! Constraints:
// 1 <= n <= 10^4
// 1 <= arr[i] <= 10^4

class Solution {
    secondMostFrequentElement(nums) {
        let frequencyMap = new Map();

        for (let num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        let highestFreq = 0;
        let secondHighestFreq = 0;
        let highestFreqElement = -1;
        let secondHighestFreqElement = -1;

        for (let [num, freq] of frequencyMap) {
            if (freq > highestFreq) {
                secondHighestFreq = highestFreq;
                secondHighestFreqElement = highestFreqElement;

                highestFreq = freq;
                highestFreqElement = num;
            } else if (freq === highestFreq) {
                highestFreqElement = Math.min(highestFreqElement, num);
            } else if (freq > secondHighestFreq) {
                secondHighestFreq = freq;
                secondHighestFreqElement = num;
            } else if (freq === secondHighestFreq) {
                secondHighestFreqElement = Math.min(secondHighestFreqElement, num)
            }
        }


        return secondHighestFreqElement;
    }
}