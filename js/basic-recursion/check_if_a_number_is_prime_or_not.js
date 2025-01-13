// Given an integer num, return true if it is prime otherwise false.

// A prime number is a number that is divisible only by 1 and itself.

// ! Examples:

// Input : num = 5
// Output : true
// Explanation : The factors of 5 are 1 and 5 only.
// So it satisfies the prime number condition.

// Input : num = 15
// Output : false
// Explanation : The factors of 15 are 1, 3, 5, 15 only.
// As the number has factors other than 1 and itself, So it is not a prime number.

// Input : num = 41
// Output: 1

// ! Constraints:
// 1 <= num <= 10^4

class CheckIfANumberIsPrimeOrNot {
    checkPrime(num) {
        if (num < 2) {
            return false;
        }
        const prime = (num, divisor) => {
            if (divisor * divisor > num) {
                return true;
            }

            if (num % divisor == 0) {
                return false;
            }

            return prime(num, divisor + 1)
        }

        return prime(num, 2)
    }
}