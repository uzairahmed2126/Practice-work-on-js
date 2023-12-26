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
// console.log(limitNumber(5, 1, 10));
// console.log(limitNumber(-3, 1, 10));
// console.log(limitNumber(14, 1, 10));
// console.log(limitNumber(4.6, 1, 10));

// ➞ 5
// ➞ 1
// ➞ 10
// ➞ 4.6

// 87 ==>   Skip the Drinks with Too Much Sugar
//  The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
//  Drinks that contain too much sugar (in this challenge) are:
//      Cola
//      Fanta
function skipTooMuchSugarDrinks(drinks) {
    let containTooMuchSugarDrinks = ["fanta", "cola"];
    for (let i = 0; i < drinks.length; i++) {
        if (containTooMuchSugarDrinks.includes(drinks[i])) {
            drinks.splice(i, 1);
            i--;
        };
    };
    // return drinks;
    return drinks.filter(drink => !containTooMuchSugarDrinks.includes(drink));

};

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));
// ➞ [water]
// ➞ []
// ➞ ["lemonade", "beer", "water"]

// 88 ==>   Add a Consecutive List of Numbers
//  Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(num) {
    let a = 0;
    for (let i = 1; i <= num; i++) {
        a += i;
    }
    return a;
}
// console.log(addUpTo(3));
// console.log(addUpTo(10));
// console.log(addUpTo(7));
// 1 + 2 + 3 = 6 
// 1 + 2 + 3 + ... + 10 = 55
// 1 + 2 + 3 + ... + 7 = 28
// ➞ 6
// ➞ 55
// ➞ 28

// 89 ==>   Check if String Ending Matches Second String
//  Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str1, str2) {
    return str1[str1.length - 2] === str2[str2.length - 2]
    // return str1.endsWith(str2);
    // return false;
};
// console.log(checkEnding("abc", "bc"));
// console.log(checkEnding("abc", "d"));
// console.log(checkEnding("samurai", "zi"));
// console.log(checkEnding("feminine", "nine"));
// console.log(checkEnding("convention", "tio"));
// ➞ true
// ➞ false
// ➞ false
// ➞ true
// ➞ false

// 90 ==> Find the Bug: Checking Even Numbers
//  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
//  Not a big deal, your friend says. He writes the following code:
//  The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
function checkAllEven(arr) {
    return arr.every((x) => x % 2 === 0);
    // return arr.filter((element) => element % 2 === +false);
}
// console.log(checkAllEven([1, 2, 3, 4])); //➞ false
// console.log(checkAllEven([2, 4, 6])); //➞ true
// console.log(checkAllEven([5, 6, 8, 10])); //➞ false
// console.log(checkAllEven([-2, 2, -2, 2])); //➞ true

// 91 ==>   Remove Null from an Array
//  Create a function to remove all null values from an array.
function removeNull(arr) {
    // return arr.filter((element) => element != null);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            result.push(arr[i]);
        };
    };
    return result;
};
// console.log(removeNull(["a", null, "b", null])); //➞ ["a", "b"]
// console.log(removeNull([null, null, null, null, null])); //➞ []
// console.log(removeNull([7, 8, null, 9])); //➞ [7, 8, 9]



// 92 ==>   True Ones, False Zeros
//  Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
function integerBoolean(str) {
    // let strIntoNum = +str;
    let arr = [];
    for (let i = 0; str[i] != undefined; i++) {
        arr.push(!!+str[i]);
    }
    return arr;
}
// console.log(integerBoolean("100101")); //➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10")); //➞ [true, false]
// console.log(integerBoolean("001")); //➞ [false, false, true]


// 93 ==>   Modifying the Last Character
//  Create a function which makes the last character of a string repeat n number of times.
function modifyLast(str, iterator) {
    let lastWord = str[str.length - 1]
    let repeatedWord = lastWord.repeat(iterator - 1)
    return str + repeatedWord;
}
// console.log(modifyLast("Hello", 3)); //➞ "Hellooo"
// console.log(modifyLast("hey", 6)); //➞ "heyyyyyy"
// console.log(modifyLast("excuse me what?", 5)); //➞ "excuse me what?????"
