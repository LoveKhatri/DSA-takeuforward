// Given an array nums of size n and an integer k, find the length of the longest sub-array that sums up to k. If no such sub-array exists, return 0.


// Examples:
// Input: nums = [10, 5, 2, 7, 1, 9],  k=15

// Output: 4

// Explanation: The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. This sub-array starts at index 1 and ends at index 4, and the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.

// Input: nums = [-3, 2, 1], k=6

// Output: 0

// Explanation: There is no sub-array in the array that sums to 6. Therefore, the output is 0.

// Input: nums = [-1, 1, 1], k=1

// Output:
// 3
// Constraints:
//  1<=n<=105
//  -105<=nums[i]<=105
//  -109<= k<=109

// Hint 1
// Use a hash map to store the prefix sum of the array at each index. This helps efficiently track subarrays that sum to k.

// Hint 2
// For each index i, calculate the prefix sum up to that point. If the prefix sum minus k exists in the hash map, the subarray between those indices sums to k.

class LongestSubarrayWithSumK {
    longestSubarray(nums, k) {
        const n = nums.length;

        let hashMap = new Map();

        let longest = 0;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            sum += nums[i];

            if (sum == k) {
                longest = Math.max(longest, i + 1);
            }

            if (hashMap.has(sum - k)) {
                let len = i - hashMap.get(sum - k);
                longest = Math.max(longest, len);
            }

            if (!hashMap.has(sum)) {
                hashMap.set(sum, i);
            }
        }

        return longest;
    }

    brute_2_longestSubarray(nums, k) {
        const n = nums.length;

        let longest = 0;

        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = i; j < n; j++) {
                sum += nums[j];

                if (sum == k) {
                    longest = Math.max(longest, j - i + 1)
                }
            }
        }

        return longest;
    }

    brute_longestSubarray(nums, k) {
        const n = nums.length;

        let longest = 0;

        for (let i = 0; i < n; i++) {

            for (let j = i; j < n; j++) {
                let sum = 0;
                for (let k = i; k <= j; k++) {
                    sum += nums[k];
                }

                if (sum == k) {
                    longest = Math.max(longest, j - i + 1)
                }
            }
        }

        return longest;
    }
}