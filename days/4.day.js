// 31 ==> Movie Theatre Admittance
//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(leastAge, psupervision) {
    return leastAge <= 15 || psupervision;
}
// console.log(acceptIntoMovie(14, true));
// console.log(acceptIntoMovie(14, false));
// console.log(acceptIntoMovie(16, false));


// 32 ==> Evaluate an Equation
//     Create a function that evaluates an equation.
function eq(value) {
    // return Number(value)
    return eval(value)
}
// console.log(eq("1+2"));
// console.log(eq("6/(9-7)"));
// console.log(eq("3+2-4"));


// 33 ==> Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    // return lastName+" "+firstName;
    // return lastName.concat(" " + firstName);
    return `${lastName + " " + firstName}`;
}
// console.log(concatName("First", "Last"));
// console.log(concatName("John", "Doe"));
// console.log(concatName("Mary", "Jane"));


// 34 ==> On/Off Switches
// Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
//  posCom(1) ➞ 2
//  posCom(3) ➞ 8
//  posCom(10) ➞ 1024

function posCom(onOff) {
    let pow = 2;
    // return Math.pow(pow, onOff)
    // return pow ** onOff;
    let outcomes = 1;
    for (let i = 0; i < onOff; i++) {
        outcomes = 2 * outcomes;
    }
    return outcomes;
}
// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));


// 35 ==> Triangle and Parallelogram Area Finder
//     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

function areaShape(base, height, shape) {
    const conditionBase = base * height;
    let result = 0;
    if (shape === "triangle") {
        result = shape + ":" + conditionBase / 2
    }
    // const result = shape !== "triangle" ? baseCondition : baseCondition/2;
    // return result
    return shape === "triangle" ? shape + ":" + conditionBase / 2 : shape + ":" + conditionBase;
    // return result = shape + ":" + conditionBase;
}
// console.log(areaShape(2, 3, "triangle"));
// console.log(areaShape(8, 6, "parallelogram"));
// console.log(areaShape(2.9, 1.3, "parallelogram"));


// 36 ==> Reverse an Array
//     Write a function to reverse an array.
function reverse(arr) {
    // return arr.reverse();
    const result = [];
    for (let i = 0; arr[i] != undefined; i++) {
        result.push(arr[arr.length - 1 - i]);
    }
    return result;
}
// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));

// 37 ==> ES6: Destructuring Arrays I
//     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
//     With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax
const arr = [1, 2, 3, 4, 5, 6];
let a = arr[0];
let b = arr[1];

// function es6(arr) {
//     let [a, b] = arr
//     console.log(a)
//     console.log(b)
// }
// es6([1, 2, 3, 4, 5, 6])
// console.log(a); // outputs 1
// console.log(b); // outputs 2


// 38 ==> Using Ternary Operators
//     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
// sneak case python yeah_nope
function yeah_nope(trueFalse) {
    // return trueFalse ? "yeah" : "nope";
    if (trueFalse) {
        return "yeah";
    }
    return "nope";
}
// console.log(yeah_nope(true))
// console.log(yeah_nope(false))


// 39 ==> Convert an Array to a String
//     Create a function that takes an array of numbers or letters and returns a string.
// arr is open Entity and string is a close entity
function arrayToString(arr) {
    // return arr.join('');
    // let result = '';
    // for (let i = 0; arr[i] != undefined; i++) {
    //     result += arr[i];
    // }
    // return result;
}
// console.log(arrayToString([1, 2, 3, 4, 5, 6]))
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))


// 40 ==> Return the Last Element in an Array
//     Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
    // return arr.pop();
    // let lastItem = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]!=undefined) {
    //         lastItem = arr[i];
    //     }
    // }
    // return lastItem;
    // return arr[arr.length-1];
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
