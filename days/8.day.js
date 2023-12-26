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
function getSumOfItems(arr) {
    let result = 0;
    // for (let i = 0; arr[i] != undefined; i++) {
    //     result += arr[i];
    // }
    // return result;
    // arr.filter((elements) => {
    //     result += elements;
    // });
    // arr.map((elements) => {
    //     result += elements;
    // });
    // return result;
};
// console.log(getSumOfItems([2, 7, 4]));
// console.log(getSumOfItems([45, 3, 0]));
// console.log(getSumOfItems([-2, 84, 23]));
//    ➞ 13
//    ➞ 48
//   ➞ 105


// 77 ==> Spaces Between Each Character
//  Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // result += str[i].replace('',' ');
        // result += " " + str[i];
    };
    return result;
};
// console.log(spaceMeOut("space"));
// console.log(spaceMeOut("far out"));
// console.log(spaceMeOut("elongated musk"));
// ➞ "s p a c e"
// ➞ "f a r  o u t"
// ➞ "e l o n g a t e d   m u s k"

//   78 ==> Raucous Applause
//  After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.
function countClaps(claps) {
    let result = [];
    for (let i = 0; i < claps.length; i++) {
        if (claps[i] === "C") {
            result.push(claps[i]);
        };
    };
    return result.length;
};
// console.log(countClaps("ClaClaClaClap!"));
// console.log(countClaps("ClClClaClaClaClap!"));
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));

// ➞ 4
// ➞ 6
// ➞ 9

// 79 ==> Filter Strings from Array
//  Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === parseInt(arr[i])) {
            result.push(arr[i]);
        };
        // if (arr[i] >= 0 && arr[i] !== "") {
        //     result.push(arr[i]);
        // };
    };
    return result;
};
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]));
// console.log(filterArray(["Nothing", "here"]));

// ➞ [1, 2, 3, 4]
// ➞ [0, 1729]
// ➞ []

//   80 ==> Summing the Squares
//   Create a function where given the number n, return the sum of all square numbers up to and including n.
//       squaresSum(3) ➞ 14
//       // 1² + 2² + 3² =
//       // 1 + 4 + 9 =
//       // 14 
function squaresSum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += Math.pow(i, 2);
    };
    return result;
};
// console.log(squaresSum(3));
// console.log(squaresSum(12));
// console.log(squaresSum(13));
// ➞ 14
// ➞ 650
// ➞ 819

//   81 ==> Check if Number is within a Given Range
//  Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
//  Numbers can be positive or negative, and they may not be integers.
//  You can assume min <= max is always true.
function isInRange(range, obj) {
    for (let i = 0; i <= range; i++) {
        if (obj.min >= 0 && obj.max <= 5) {
            return true;
        };
    };
    return false;
};
// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));
// console.log(isInRange(5, { min: 5, max: 5 }));
// ➞ true
// ➞ true
// ➞ false
// ➞ true

// 82 ==> Coding Website Score Calculator
//  Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.
function scoreCalculator(easy, medium, hard) {
    let totalPoints = (5 * easy) + (10 * medium) + (20 * hard);
    return totalPoints > 0 ? totalPoints : "invalid";

}
// console.log(scoreCalculator(1, 2, 3));
// console.log(scoreCalculator(1, 0, 10));
// console.log(scoreCalculator(5, 2, -6));
// ➞ 85
// ➞ 205
// ➞ "invalid"