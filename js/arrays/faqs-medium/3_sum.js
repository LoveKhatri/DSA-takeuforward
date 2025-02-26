// Given an integer array nums.Return all triplets such that:

// i != j, i != k, and j != k
// nums[i] + nums[j] + nums[k] == 0.


// Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.


// Examples:
// Input: nums = [2, -2, 0, 3, -3, 5]

// Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

// Explanation: nums[1] + nums[2] + nums[0] = 0

// nums[4] + nums[1] + nums[5] = 0

// nums[4] + nums[2] + nums[3] = 0

// Input: nums = [2, -1, -1, 3, -1]

// Output: [[-1, -1, 2]]

// Explanation: nums[1] + nums[2] + nums[0] = 0

// Note that we have used two -1s as they are separate elements with different indexes

// But we have not used the -1 at index 4 as that would create a duplicate triplet

// Input: nums = [8, -6, 5, 4]

// (Give answer with the output and triplets sorted in ascending order)

// Output:
// []
// Constraints:
// 1 <= nums.length <= 3000
// -104 <= nums[i] <= 104

// Hint 1
// Begin by sorting the input array to simplify the process of finding triplets and managing duplicates. Sorting ensures that duplicates are adjacent and allows the use of a two-pointer technique.

// Hint 2
// Iterate through the array, fixing one element at a time. For each fixed element, look for a pair of numbers in the remaining array that sum to the negative of the fixed element. Use two pointers, one starting from the next element after the fixed element and the other from the end of the array.

class ThreeSum {
    threeSum(nums) {
        const n = nums.length;
        const ans = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            // Continue if the prev value of i 
            // was the same as current value
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1;
            let k = n - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    const temp = [nums[i], nums[j], nums[k]];
                    ans.push(temp);
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
            }
        }

        return ans
    }

    better_threeSum(nums) {
        const n = nums.length;
        const set = new Set();

        for (let i = 0; i < n; i++) {
            const hashSet = new Set()
            for (let j = i + 1; j < n; j++) {
                let remaining = -(nums[i] + nums[j])

                if (hashSet.has(remaining)) {
                    let temp = [nums[i], nums[j], remaining]
                    temp.sort();
                    set.add(JSON.stringify(temp))
                }


                hashSet.add(nums[j])
            }
        }

        return Array.from(set).map((a) => JSON.parse(a))
    }

    brute_threeSum(nums) {
        // Set to store unique triplets
        let tripletSet = new Set();

        let n = nums.length;

        // Check all possible triplets
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        // Found a triplet that sums up to target
                        let temp = [nums[i], nums[j], nums[k]];

                        /* Sort the triplet to ensure
                        uniqueness when storing in set*/
                        temp.sort((a, b) => a - b);
                        tripletSet.add(temp.join(','));
                    }
                }
            }
        }

        // Convert set to array of arrays (unique triplets)
        let ans = Array.from(tripletSet).map(triplet => triplet.split(',').map(num => parseInt(num)));

        // Return the ans
        return ans;
    }
}