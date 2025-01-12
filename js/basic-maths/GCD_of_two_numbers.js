// You are given two integers n1 and n2. You need find the Greatest Common
// Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.

// The Greatest Common Divisor (GCD) of two integers is the largest positive
// integer that divides both of the integers.

// ! Examples:

// Input: n1 = 4, n2 = 6
// Output: 2
// Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6
// Greatest Common divisor = 2.

// Input: n1 = 9, n2 = 8
// Output: 1
// Explanation: Divisors of n1 = 1, 3, 9 Divisors of n2 = 1, 2, 4, 8.
// Greatest Common divisor = 1.

// Input: n1 = 6, n2 = 12
// Output: 6

// ! Constraints:
// 1 <= n1, n2 <= 1000

class GCDOfTwoNumbers {
    // GCD(n1, n2) {
    // int largest = 1;

    // for (int i = 2; i <= Math.min(n1, n2); i++){
    // if(n1%i == 0 && n2%i == 0){
    // largest = i;
    // }
    // }

    // return largest;
    // }

    // GCD(n1, n2) {

    // // Euclidean Algorithm
    // while (n1 != 0 && n2 != 0){
    // if (n1 > n2) {
    // n1-=n2;
    // } else {
    // n2-=n1;
    // }
    // }

    // if (n1 == 0) return n2;
    // return n1;
    // }

    GCD(n1, n2) {

        // Euclidean Algorithm
        while (n1 != 0 && n2 != 0) {
            if (n1 > n2) {
                n1 = n1 % n2;
            } else {
                n2 = n2 % n1;
            }
        }

        if (n1 == 0)
            return n2;
        return n1;
    }
}