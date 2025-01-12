// Given an array of n elements. The task is to return the count of the number of odd in the array.

// ! Examples:

// Input: n=5, array = [1,2,3,4,5]
// Output: 3
// Explanation: The three odd elements are (1,3,5).

// Input: n=6, array = [1,2,1,1,5,1]
// Output: 5
// Explanation: The five odd elements are one 5 and four 1's.

// Input: n=5, array = [1,3,5,7,9]
// Output: 1

// ! Constraints:
// 1 <= n <= 105
// 1 <= arr[i] <= 104

class CountOfOddNumbersInArray {
    isOdd(n) {
        if (n == 1) return true
        return n % 2 != 0;
    }

    countOdd(arr, n) {
        let oddCount = 0;

        for (let i = 0; i < n; i++) {
            if (this.isOdd(arr[i])) oddCount++;
        }

        return oddCount;
    }
}
