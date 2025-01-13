// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// ! Examples:

// Input : num = 529
// Output : 7
// Explanation : In first iteration the digits sum will be = 5 + 2 + 9 => 16
// In second iteration the digits sum will be 1 + 6 => 7.
// Now single digit is remaining , so we return it.

// Input : num = 101
// Output : 2
// Explanation : In first iteration the digits sum will be = 1 + 0 + 1 => 2
// Now single digit is remaining , so we return it.

// Input : num = 38
// Output: 3

// ! Constraints:
// 0 <= num <= 2^31 - 1

class SumOfDigitsInAGivenNumber {
    addDigits(num) {
        if (num < 10) {
            return num
        }

        const sum = (n) => {
            if (n <= 0) return 0;
            const lastDigit = n % 10;
            n = Math.floor(n / 10)

            return lastDigit + sum(n)
        }

        num = sum(num)

        return this.addDigits(num)
    }
}