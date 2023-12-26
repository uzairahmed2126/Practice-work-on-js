// 83 ==>   Sum of the Odd Numbers
//  Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
// 1 + 3 + 5 = 9
function addOddToN(odd) {
    let result = 0;
    for (let i = 1; i <= odd; i++) {
        if (i % 2) {
            result += i;
        };
    };
    return result;
};
// console.log(addOddToN(5));
// console.log(addOddToN(13));
// console.log(addOddToN(47));
// ➞ 9
// ➞ 49
// ➞ 576

// 84 ==>   Halloween Day
//  Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(isOct) {
    let date = "31";
    let month = "10";
    let splited = isOct.split("/");
    for (let i = 0; i < splited.length; i++) {
        if (splited[i] === month && splited[splited.length - 1] === date) {
            return "Bonfire toffee";
        };
    };
    return "toffee";
};
// console.log(halloween("2013/10/31"));
// console.log(halloween("2012/07/31"));
// console.log(halloween("2011/10/12"));
// ➞ "Bonfire toffee"
// ➞ "toffee"
// ➞ "toffee"

// 85 ==>   Simple OOP Calculator
//  Create functions for the Calculator class that can do the following:
//      Add two numbers.
//      Subtract two numbers.
//      Multiply two numbers.
//      Divide two numbers.

class Calculator {
    add(num1, num2) { return num1 + num2; };
    subtract(num1, num2) { return num1 - num2; };
    multiply(num1, num2) { return num1 * num2; };
    divide(num1, num2) { return num1 / num2; };
}
var calculator = new Calculator()
// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(10, 5));
// console.log(calculator.divide(10, 5));
//  ➞ 15
//  ➞ 5
//  ➞ 50
//  ➞ 2


// 86 ==>   Limit a Number's Value
//  Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
//      If the number falls within the range, the number should be returned.
//      If the number is less than the lower limit of the range, the lower limit should be returned.
//      If the number is greater than the upper limit of the range, the upper limit should be returned.
function limitNumber(num, lowerLimit, upperLimit) {
    if (num < lowerLimit) {
        return lowerLimit;
    } else if (num > upperLimit) {
        return upperLimit;
    } else {
        return num;
    }
}
console.log(limitNumber(5, 1, 10));
console.log(limitNumber(-3, 1, 10));
console.log(limitNumber(14, 1, 10));
console.log(limitNumber(4.6, 1, 10));

// ➞ 5
// ➞ 1
// ➞ 10
// ➞ 4.6