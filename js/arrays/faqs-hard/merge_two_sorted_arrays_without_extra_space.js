// Given two integer arrays nums1 and nums2. Both arrays are sorted in non-decreasing order.



// Merge both the arrays into a single array sorted in non-decreasing order.

// The final sorted array should be stored inside the array nums1 and it should be done in-place.
// nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s.
// nums2 has a length of n.

// Examples:
// Input: nums1 = [-5, -2, 4, 5], nums2 = [-3, 1, 8]

// Output: [-5, -3, -2, 1, 4, 5, 8]

// Explanation: The merged array is: [-5, -3, -2, 1, 4, 5, 8], where [-5, -2, 4, 5] are from nums1 and [-3, 1, 8] are from nums2

// Input: nums1 = [0, 2, 7, 8], nums2 = [-7, -3, -1]

// Output: [-7, -3, -1, 0, 2, 7, 8]

// Explanation: The merged array is: [-7, -3, -1, 0, 2, 7, 8], where [0, 2, 7, 8] are from nums1 and [-7, -3, -1] are from nums2

// Input: nums1 = [1, 3, 5], nums2 = [2, 4, 6, 7]

// Output:
// 2
// Constraints:
// n == nums2.length.
// m + n == nums1.length.
// 0 <= n, m <= 1000
// -104 <= nums1[i], nums2[i] <= 104
// Both nums1 and nums2 are sorted in non-decreasing order.

// Hint 1
// "Use three pointers: i = m - 1 (last valid element in nums1) j = n - 1 (last element in nums2) k = m + n - 1 (last index in nums1)"

// Hint 2
// "If nums1[i] > nums2[j], place nums1[i] at nums1[k]. Otherwise, place nums2[j] at nums1[k]. Move the pointer(s) accordingly."

class MergeTwoSortedArraysWithoutExtraSpace {
    merge(nums1, m, nums2, n) {
        let left = m - 1;
        let right = 0;

        while (left >= 0 && right < n) {
            if (nums1[left] > nums2[right]) {
                [nums1[left], nums2[right]] = [nums2[right], nums1[left]]
                left--; right++;
            } else {
                break;
            }
        }

        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);

        for (let i = 0; i < nums2.length; i++) {
            nums1[m + i] = nums2[i]
        }
    }
}