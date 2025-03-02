// Given an integer array nums of size n. Return all elements which appear more than n/3 times in the array. The output can be returned in any order.


// Examples:
// Input: nums = [1, 2, 1, 1, 3, 2]

// Output: [1]

// Explanation: Here, n / 3 = 6 / 3 = 2.

// Therefore the elements appearing 3 or more times is : [1]

// Input: nums = [1, 2, 1, 1, 3, 2, 2]

// Output: [1, 2]

// Explanation: Here, n / 3 = 7 / 3 = 2.

// Therefore the elements appearing 3 or more times is : [1, 2]

// Input: nums = [1, 2, 1, 1, 3, 2, 2, 3](Give the solution sorted in ascending order)

// Output:
// [1, 2]
// Constraints:
// n == nums.length.
// 1 <= n <= 105
// -104 <= nums[i] <= 104

// Hint 1
// Use two counters to track two potential majority candidates. Count occurrences using a hash map (O(n) space). Collect elements that appear more than n/3 times.

// Hint 2
// "Sort the array (O(n log n)). Scan linearly to find elements occurring more than n/3 times."

class MajorityElementII {
    majorityElementTwo(nums) {
        // If there were 3 elements appearing more than n/3 times,
        // their total count would exceed n, which is impossible.

        let count1 = 0;
        let count2 = 0;
        let el1, el2;

        for (let i = 0; i < nums.length; i++) {
            if (count1 == 0 && nums[i] != el2) {
                count1 = 1;
                el1 = nums[i];
            } else if (count2 == 0 && nums[i] != el1) {
                count2 = 1;
                el2 = nums[i];
            } else if (el1 == nums[i]) {
                count1++;
            } else if (el2 == nums[i]) {
                count2++;
            } else {
                count1--;
                count2--
            }
        }

        count1 = count2 = 0;
        let res = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == el1) count1++;
            if (nums[i] == el2) count2++;
        }

        if (count1 > Math.floor(nums.length / 3)) res.push(el1)
        if (count2 > Math.floor(nums.length / 3) && el1 !== el2) res.push(el2)

        return res;
    }

    better_majorityElementTwo(nums) {
        let res = new Set();

        let hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);

            if (Math.floor(nums.length / 3) < hashMap.get(nums[i])) {
                res.add(nums[i])
            }
        }

        return Array.from(res).map((a) => a);
    }

    brute_majorityElementTwo(nums) {
        let res = new Set()

        for (let i = 0; i < nums.length; i++) {
            let count = 0;
            let currentElement = nums[i];

            for (let j = 0; j < nums.length; j++) {
                if (nums[j] == currentElement) {
                    count++;
                }
            }

            if (Math.floor(nums.length / 3) < count) {
                res.add(currentElement)
            }
        }

        return Array.from(res).map((a) => a);
    }
}