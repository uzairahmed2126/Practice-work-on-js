// 11 ==> Correct the Mistakes
function squared(num) {
    return num * num;
}
// console.log(squared(5));
// console.log(squared(9));
// console.log(squared(100));

// ➞ 25
// ➞ 81
// ➞ 10000

// 12 ==> Using the "&&" Operator
//     JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//     Consider a && b:
//         a is checked if it is true or false.
//         If a is false, false is returned.
//         b is checked if it is true or false.
//         If b is false, false is returned.
//         Otherwise, true is returned (as both a and b are therefore true ).
//     The && operator will only return true for true && true.
//     Make a function using the && operator.

function and(firstVal, secondVal) {
    return firstVal && secondVal;
}
// console.log(and(true, false));
// console.log(and(true, true));
// console.log(and(false, true));
// console.log(and(false, false));

// 13 ==> Is the Number Less than or Equal to Zero?
//     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(number) {
    return number <= 0;
}
// console.log(lessThanOrEqualToZero(5))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))


// 14 ==> Less Than 100?
//     Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
    return (num1 + num2) < 100;
}
// console.log(lessThan100(22, 15))
// console.log(lessThan100(83, 34))
