// 72 ==> Nth Star Number
//  Create a function that takes a positive integer and returns the nth "star number".
//  A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
function starNumber(n) {
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "Please provide a positive integer.";
    };
    return 6 * n * (n - 1) + 1;
}
// console.log(starNumber(2));
// console.log(starNumber(3));
// console.log(starNumber(5));
// ➞ 13
// ➞ 37
// ➞ 121

// 73 ==> Lowercase, Uppercase or Mixed?
//  Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
function getCase(str) {
    if (str === str.toUpperCase()) {
        return "upper"
    } else if (str === str.toLowerCase()) {
        return "lower"
    }
    return "mixed";
}
// console.log(getCase("whisper..."));
// console.log(getCase("SHOUT!"));
// console.log(getCase("Indoor Voice"));
// ➞ "lower"
// ➞ "upper"
// ➞ "mixed"


// 74 ==> ES6: Destructuring Arrays
//  You can assign variables from nested arrays like this:
//    const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
//    let trans1 = arr[0]
//    let trans2 = arr[1]
//    let trans3 = arr[2][0]
//    let trans4 = arr[2][1][0]
//    console.log(trans1) // outputs "cars"
//    console.log(trans2) // outputs "planes"
//    console.log(trans3) // outputs "trains"
//    console.log(trans4) // outputs "motorcycles"
//  With ES6, you can assign variables from arrays in a much more succint way. Use Array Destructuring to assign variables
function nestedArr() {
    const arr = ["cars", "planes", ["trains", ["motorcycles"]]];
    let trans1 = arr[0];
    let trans2 = arr[1];
    let trans3 = arr[2][0];
    let trans4 = arr[2][1][0];
    console.log(trans1, trans2, trans3, trans4);
}
// nestedArr();
//    console.log(trans1) // outputs "cars"
//    console.log(trans2) // outputs "planes"
//    console.log(trans3) // outputs "trains"
//    console.log(trans4) // outputs "motorcycles"

// 75 ==> The 3 Programmers Problem
//  You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.
function programmers(emp1, emp2, emp3) {
    const max = Math.max(emp1, emp2, emp3);
    const min = Math.min(emp1, emp2, emp3);
    const difference = max - min;
    return difference;

}
// console.log(programmers(147, 33, 526));
// console.log(programmers(33, 72, 74));
// console.log(programmers(1, 5, 9));
// ➞ 493
// ➞ 41
// ➞ 8


// 76 ==> Get the Sum of All Array Elements
//  Create a function that takes an array and returns the sum of all numbers in the array.
//    getSumOfItems([2, 7, 4]) ➞ 13
//    getSumOfItems([45, 3, 0]) ➞ 48
//    getSumOfItems([-2, 84, 23]) ➞ 105
