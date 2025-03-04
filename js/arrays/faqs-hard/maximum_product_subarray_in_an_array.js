// Given an integer array nums. Find the subarray with the largest product, and return the product of the elements present in that subarray.



// A subarray is a contiguous non-empty sequence of elements within an array.


// Examples:
// Input: nums = [4, 5, 3, 7, 1, 2]

// Output: 840

// Explanation: The largest product is given by the whole array itself

// Input: nums = [-5, 0, -2]

// Output: 0

// Explanation: The largest product is achieved with the following subarrays [0], [-5, 0], [0, -2], [-5, 0, 2].

// Input: nums = [1, -2, 3, 4, -4, -3]

// Output:
// 3
// Constraints:
// 1 <= nums.length <= 104
// -10 <= nums[i] <= 10
// -109 <= product of any prefix or suffix of nums <= 109

// Hint 1
// Instead of keeping just a maximum sum, maintain both the maximum product and minimum product at each step, since negative numbers can flip signs.

// Hint 2
// A negative number can make a large positive product negative, but it can also turn a large negative product positive if multiplied with another negative. Therefore, keep track of both the max product so far and the min product so far, swapping when needed.

class MaximumProductSubarrayInAnArray {
    maxProduct(nums) {
        const n = nums.length;

        let pre = 1;
        let suf = 1;
        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < n; i++) {
            if (pre == 0) pre = 1;
            if (suf == 0) suf = 1;

            pre = pre * nums[i];
            suf = suf * nums[n - i - 1];

            max = Math.max(max, Math.max(pre, suf))
        }

        return max == -0 ? 0 : max
    }

    better_maxProduct(nums) {
        const n = nums.length;

        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < n; i++) {
            let prod = nums[i];
            for (let j = i + 1; j < n; j++) {
                max = Math.max(prod, max)

                prod *= nums[j];
            }
            max = Math.max(prod, max)
        }

        return max
    }

    brute_maxProduct(nums) {
        const n = nums.length;

        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let prod = 1;

                for (let k = i; k <= j; k++) {
                    prod *= nums[k];
                }

                max = Math.max(prod, max)
            }
        }

        return max
    }
}