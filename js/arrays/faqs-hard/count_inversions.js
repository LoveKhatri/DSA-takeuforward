// Given an integer array nums. Return the number of inversions in the array.



// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

// It indicates how close an array is to being sorted.
// A sorted array has an inversion count of 0.
// An array sorted in descending order has maximum inversion.

// Examples:
// Input: nums = [2, 3, 7, 1, 3, 5]

// Output: 5

// Explanation: The responsible indexes are:

// nums[0], nums[3], values: 2 > 1 & indexes: 0 < 3

// nums[1], nums[3], values: 3 > 1 & indexes: 1 < 3

// nums[2], nums[3], values: 7 > 1 & indexes: 2 < 3

// nums[2], nums[4], values: 7 > 3 & indexes: 2 < 4

// nums[2], nums[5], values: 7 > 5 & indexes: 2 < 5

// Input: nums = [-10, -5, 6, 11, 15, 17]

// Output: 0

// Explanation: nums is sorted, hence no inversions present.

// Input: nums = [9, 5, 4, 2]

// Output:
// 3
// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Hint 1
// We can use Merge Sort to count inversions efficiently in O(n log n). While merging, if nums[i] > nums[j], all elements from i onward in the left half form inversions with nums[j].

// Hint 2
// If values in nums are bounded, a Fenwick Tree or Segment Tree can be used to count elements greater than nums[j] before index j in O(n log n).

class CountInversions {
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

                counter += (mid - left + 1);

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

    mergeSort(arr, low, high) {
        let count = 0;

        if (low < high) {
            const mid = low + Math.floor((high - low) / 2);

            count += this.mergeSort(arr, low, mid);
            count += this.mergeSort(arr, mid + 1, high);

            count += this.merge(arr, low, mid, high);
        }

        return count;
    }


    numberOfInversions(nums) {
        return this.mergeSort(nums, 0, nums.length - 1)
    }

    brute_numberOfInversions(nums) {
        const n = nums.length
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i < j && nums[i] > nums[j]) {
                    count++
                }
            }
        }

        return count;
    }
}