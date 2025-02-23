// Given two sorted arrays nums1 and nums2, return an array containing the intersection of these two arrays.

// The intersection of two arrays is an array where all values are present in both arrays.


// Examples:

// Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]
// Output: [1, 2]
// Explanation: The elements 1, 2 are the only elements present in both nums1 and nums2

// Input: nums1 = [1, 2, 2, 3], nums2 = [4, 5, 7]
// Output: []
// Explanation: No elements appear in both nums1 and nums2

// Input: nums1 = [-45, -45, 0, 0, 2], nums2 = [-50, -45, 0, 0, 5, 7]
// Output: [-45, 0, 0]

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// -104 <= nums1[i], nums2[i] <= 104
// Both nums1 and nums2 are sorted in non-decreasing order.

// Hint 1
// Use two pointers to traverse both arrays simultaneously. This helps efficiently find common elements since both arrays are sorted.Add an element to the intersection only if it is present in both arrays at the same index of the pointers.

// Hint 2
// If duplicates are not allowed in the result, skip consecutive duplicate elements in either array during traversal.

class IntersectionOfTwoSortedArrays {
    intersectionArray(nums1, nums2) {
        let i = 0;
        let j = 0;

        let result = [];

        while (i < nums1.length && j < nums2.length) {
            // if the element in second array is greater
            // increment i cause the current element won't find
            // it's match :(
            if (nums1[i] < nums2[j]) {
                i++
            }
            // if the element in second array is smaller
            // increment j to check whether the next element
            // matches or not (in next iteration)
            else if (nums2[j] < nums1[i]) {
                j++
            }
            // yay! found a match
            else {
                result.push(nums1[i])
                i++;
                j++;
            }
        }

        return result;
    }
}