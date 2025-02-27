// Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// ·      a, b, c, d are all distinct valid indices of nums.

// ·      nums[a] + nums[b] + nums[c] + nums[d] == target.



// Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.


// Examples:
// Input: nums = [1, -2, 3, 5, 7, 9], target = 7

// Output: [[-2, 1, 3, 5]]

// Explanation: nums[1] + nums[0] + nums[2] + nums[3] = 7

// Input: nums = [7, -7, 1, 2, 14, 3], target = 9

// Output: []

// Explanation: No quadruplets are present which add upto 9

// Input: nums = [1, 1, 3, 4, -3], target = 5

// (Give answer with the output and quadruplets sorted in ascending order)

// Output:
// 4
// Constraints:
// 1 <= nums.length <= 200
// -104 <= nums[i] <= 104
// -104 <= target <= 104

// Hint 1
// Begin by sorting the input array to simplify the identification of quadruplets and management of duplicates. Sorting ensures that duplicates are adjacent and facilitates the use of pointers for efficient searching.

// Hint 2
// Iterate through the array, fixing two elements at a time. For each pair, use the two-pointer technique on the remaining array to find pairs of numbers that sum to the complement of the fixed pair. After fixing two elements, use two pointers to traverse the remaining array, adjusting pointers based on the sum.

class FourSum {
    fourSum(nums, target) {
        const n = nums.length;

        // let els = nums.map((a, index) => [a, index]);
        // els.sort((a, b) => a[0] - b[0]);
        nums.sort((a, b) => a - b);
        let ans = [];


        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            for (let j = i + 1; j < n; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;

                let k = j + 1;
                let l = n - 1;

                while (k < l) {
                    let sum = nums[i];
                    sum += nums[j];
                    sum += nums[k];
                    sum += nums[l];

                    if (sum == target) {
                        const temp = [nums[i], nums[j], nums[k], nums[l]];
                        ans.push(temp);
                        k++;
                        l--;

                        while (k < l && nums[k] == nums[k - 1]) k++
                        while (k < l && nums[l] == nums[l + 1]) l--;

                    } else if (sum > target) {
                        l--;
                    } else {
                        k++;
                    }
                }
            }
        }

        return ans;
    }

    better_fourSum(nums, target) {
        const n = nums.length;

        const set = new Set();

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; i++) {
                const hashSet = new Set();
                for (let k = j + 1; k < n; i++) {
                    const sum = nums[i] + nums[j] + nums[k];
                    const fourth = target - sum;

                    if (hashSet.has(fourth)) {
                        const temp = [nums[i], nums[j], nums[k], fourth]
                        temp.sort((a, b) => a - b)
                        set.add(JSON.stringify(temp));
                    }
                }
            }
        }

        let ans = Array.from(set).map((a) => JSON.parse(a))
        return ans;
    }

    // Clearly exceeds the time limit (n^4)
    brute_fourSum(nums, target) {
        const n = nums.length;

        const set = new Set();

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; i++) {
                for (let k = j + 1; k < n; i++) {
                    for (let l = k + 1; l < n; i++) {
                        const sum = nums[i] + nums[j] + nums[k] + nums[l];

                        if (sum == target) {
                            const temp = [nums[i], nums[j], nums[k], nums[l]]
                            temp.sort((a, b) => a - b)
                            set.add(JSON.stringify(temp));
                        }
                    }
                }
            }
        }

        let ans = Array.from(set).map((a) => JSON.parse(a))
        return ans;
    }
}