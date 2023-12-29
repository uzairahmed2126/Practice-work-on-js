// 94 ==>   Where is Bob!?!
//  Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
function findBob(arr) {
    for (let i = 0; arr[i] != undefined; i++) {
        if (arr[i] === "Bob") {
            return i;
        }
    }
    // return -1
    // return arr.indexOf('Bob')
    return arr.includes('Bob') ? arr : -1;
}
// console.log(findBob(["Jimmy", "Layla", "Bob"]));//➞ 2
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));//➞ 0
// console.log(findBob(["Jimmy", "Layla", "James"]));//➞ -1


// 95 ==>   Negate the Array of Numbers
//  Given an array of numbers, negate all elements contained within.
//      Negating a positive value -+n will return -n, because all +'s are removed.
//      Negating a negative value --n will return n, because the first - turns the second minus into a +.
function negate(arr) {
    let newArr = [];
    for (let i = 0; arr[i] != undefined; i++) {
        newArr.push(-1 * arr[i]);
    };
    return newArr;
}
// console.log(negate([1, 2, 3, 4]));// ➞ [-1, -2, -3, -4]
// console.log(negate([-1, 2, -3, 4]));// ➞ [1, -2, 3, -4]
// console.log(negate([]));// ➞ []

// 96 ==>   Convert Number to String of Dashes
//  Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
    let result = '-';
    // for (let i = 0; i < num; i++) {
    //     result += "-"
    // }
    return result.repeat(num);
}
// console.log(Go(1)) //➞ "-"
// console.log(Go(5)) //➞ "-----"
// console.log(Go(3)) //➞ "---"

// 97 ==>   Word Endings
//  Create a function that adds a string ending to each member in an array.

function addEnding(arr, addStr) {
    let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i] + addStr);
    // };
    // return result;
};
// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")); //➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// console.log(addEnding(["new", "pander", "scoop"], "er")); //➞ ["newer", "panderer", "scooper"]
// console.log(addEnding(["bend", "sharpen", "mean"], "ing")); //➞ ["bending", "sharpening", "meaning"]

// 98 ==>   Flip the Boolean
//  Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
function reverse(value) {
    if (value === true || value === false) {
        return !value;
    };
    return "boolean expected";
};
// console.log(reverse(true)); //➞ false
// console.log(reverse(false)); //➞ true
// console.log(reverse(0)); //➞ "boolean expected"
// console.log(reverse(null)); //➞ "boolean expected"


// 99 ==>   Return the Four Letter Strings
//  Create a function that takes an array of strings and returns the words that are exactly four letters.
function isFourLetters(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            result.push(arr[i])
        }
    }
    return result
}
// console.log(isFourLetters(["Tomato", "Potato", "Pair"])); //➞ ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); //➞ ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); //➞ ["Ryan", "Matt"]



// 100 ==>  Shuffle the Name
//  Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.


function nameShuffle(str) {
    let splitedArr = str.split(' ');
    let result = [];
    for (let i = 0; i < splitedArr.length; i++) {
        result.push(splitedArr[i]);
    };
    return String(result.reverse()).replace(",", ' ');
};
// console.log(nameShuffle("Donald Trump")); //➞ "Trump Donald"
// console.log(nameShuffle("Rosie O'Donnell")); //➞ "O'Donnell Rosie"
// console.log(nameShuffle("Seymour Butts")); //➞ "Butts Seymour"


// 101 ==>  Video Streaming Plans
//  Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
//      BasicPlan   StandardPlan    PremiumPlan
//      ✓           ✓               ✓               canStream
//      ✓           ✓               ✓               canDownload
//      ✓           ✓               ✓               hasSD
//                  ✓               ✓               hasHD
//                                  ✓               hasUHD
//      1           2               4               numOfDevices
//      $8.99       $12.99          $15.99          price
class streamingPlans {

}
const BasicPlan = new streamingPlans;
const PremiumPlan = new streamingPlans;
// console.log(BasicPlan.hasSD); //➞ true 
// console.log(PremiumPlan.hasSD); //➞ true
// console.log(BasicPlan.hasUHD); //➞ false
// console.log(BasicPlan.price); //➞ '$8.99'
// console.log(PremiumPlan.numOfDevices); //➞ 4

// 102 ==>  Missing Third Angle
//  You are given 2 out of 3 angles in a triangle, in degrees.
//  Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//      An acute angle is less than 90 degrees.
//      A right angle is exactly 90 degrees.
//      An obtuse angle is greater than 90 degrees (but less than 180 degrees).
//  For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
function missingAngle(num1, num2) {
    let total = num1 + num2;
    if (90 === total) {
        return "right";
    } else if (90 < total) {
        return "acute";
    } else if (90 >= total || 180 <= total) {
        return "obtuse";
    }
    return false;
};
// console.log(missingAngle(27, 59)); //➞ "obtuse"
// console.log(missingAngle(135, 11)); //➞ "acute"
// console.log(missingAngle(45, 45)); //➞ "right"


// 103 ==>  Semantic Versioning
//  In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//      The first number is the major version.
//      The second number is the minor version.
//      The third number is the patch (bug fixes).
//  Write three separate functions, one to retrieve each element in the semantic versioning specification.
//      // 6.1.9
function retrieveMajor(str) {
    return str[str.length - 5];
};
function retrieveMinor(str) {
    return str[str.length - 3];
};
function retrievePatch(str) {
    return str[str.length - 1];
};
// console.log(retrieveMajor("6.1.9")); //➞ "6"
// console.log(retrieveMinor("6.1.9")); //➞ "1"
// console.log(retrievePatch("6.1.9")); //➞ "9"
// // 2.1.0
// console.log(retrieveMajor("2.1.0")); //➞ "2"
// console.log(retrieveMinor("2.1.0")); //➞ "1"
// console.log(retrievePatch("2.1.0")); //➞ "0"


// 104 ==>  Alphabet Soup
//  Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
    // let arr = [];
    // let result = '';
    // for (let i = 0; i < str.length; i++) {
    //     arr.push(str[i]);
    //     arr.sort();
    //     result = arr.join("");
    // };
    // return result;
    return str.split('').sort().join("");
};
console.log(AlphabetSoup("hello")); //➞ "ehllo"
console.log(AlphabetSoup("edabit")); //➞ "abdeit"
console.log(AlphabetSoup("hacker")); //➞ "acehkr"
console.log(AlphabetSoup("geek")); //➞ "eegk"
console.log(AlphabetSoup("javascript")); //➞ "aacijprstv"


