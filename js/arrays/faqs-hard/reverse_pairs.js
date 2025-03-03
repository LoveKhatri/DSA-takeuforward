// Given an integer array nums. Return the number of reverse pairs in the array.



// An index pair (i, j) is called a reverse pair if:

// 0 <= i < j < nums.length
// nums[i] > 2 * nums[j].

// Examples:
// Input: nums = [6, 4, 1, 2, 7]

// Output: 3

// Explanation: The reverse pairs are:

// (0, 2) : nums[0] = 6, nums[2] = 1, 6 > 2 * 1

// (0, 3) : nums[0] = 6, nums[3] = 2, 6 > 2 * 2

// (1, 2) : nums[1] = 4, nums[2] = 1, 4 > 2 * 1

// Input: nums = [5, 4, 4, 3, 3]

// Output: 0

// Explanation: No pairs satisfy both the conditons.

// Input: nums = [6, 4, 4, 2, 2]

// Output:
// 2
// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Hint 1
// Similar to counting inversions, we divide the array into two halves and count reverse pairs while merging. During merging, count the number of nums[j] where nums[i] > 2 * nums[j] for all i < j.

// Hint 2
// If values in nums are bounded, a Fenwick Tree or Segment Tree can efficiently count elements <= 2 * nums[j] in O(log n).

class ReversePairs {
    merge(arr, low, mid, high) {
        const temp = [];

        let left = low;
        let right = mid + 1;

        let counter = 0;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right])
                right++;
            }
        }

        while (left <= mid) {
            temp.push(arr[left])
            left++;
        }
        while (right <= high) {
            temp.push(arr[right])
            right++;
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low]
        }

        return counter;
    }

    // Function to count reverse pairs
    countPairs(arr, low, mid, high) {
        let right = mid + 1;
        let cnt = 0;

        for (let i = low; i <= mid; i++) {
            /*while right is less than equal to high and arr[i]
            is greater than 2 * arr[right] then increment right by 1*/
            while (right <= high && arr[i] > 2 * arr[right]) right++;

            cnt += (right - (mid + 1));
        }
        //Return the count
        return cnt;
    }

    mergeSort(arr, low, high) {
        let count = 0;

        if (low < high) {
            const mid = low + Math.floor((high - low) / 2);

            count += this.mergeSort(arr, low, mid);
            count += this.mergeSort(arr, mid + 1, high);

            count += this.countPairs(arr, low, mid, high)

            this.merge(arr, low, mid, high);
        }

        return count;
    }


    reversePairs(nums) {
        return this.mergeSort(nums, 0, nums.length - 1)
    }

    brute_reversePairs(nums) {
        const n = nums.length
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i < j && nums[i] > 2 * nums[j]) {
                    count++
                }
            }
        }

        return count;
    }
}