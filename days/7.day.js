// 61 ==> ES6: Destructuring Objects III
//         const obj =  { two : 2 }
//         var { one, two } = obj
//         console.log(one) // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).
function validation() {
    const obj = { two: 2 };
    var { one, two } = obj;
    console.log(one) // outputs undefined 
}
// validation();
// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
function moodToday(moods) {
    if (moods) {
        return `Today, I am feeling ${moods}`
    }
    return `Today, I am feeling neutral`
}
// console.log(moodToday("happy"));
// console.log(moodToday("sad"));
// console.log(moodToday());
// ➞ "Today, I am feeling happy"
// ➞ "Today, I am feeling sad"
// ➞ "Today, I am feeling neutral"

// 63) ==> Similar Bread
//     Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//     The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
function hasSameBread(sandwich1, sandwich2) {
    // return ingredients2[0]===ingredients2[2];
    return (sandwich1[0] === sandwich2[0] && sandwich1[sandwich1.length - 1] === sandwich2[sandwich2.length - 1]);
}
// console.log(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]));
// console.log(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]));
// console.log(hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]));
// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//         Inputs   Outputs
//         1        "circle"
//         2        "semi-circle"
//         3        "triangle"
//         4        "square"
//         5        "pentagon"
//         6        "hexagon"
//         7        "heptagon"
//         8        "octagon"
//         9        "nonagon"
//         10       "decagon"
function nSidedShape(sides) {
    let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    return shapes[sides - 1];
}
// console.log(nSidedShape(3));
// console.log(nSidedShape(1));
// console.log(nSidedShape(9));
// ➞ "triangle"
// ➞ "circle"
// ➞ "nonagon"
//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!
// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {

    // let flatedArr = arr();
    // return flatedArr;
    // let filterdArr = arr.map(function (index,item,arr) {
    //     return arr[item]*2;
    // });
    // return filterdArr;
    // let result = []
    // for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i] * 2)
    // }
    // return result
}
// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));
// ➞ [4, 10, 6]
// ➞ [2, 172, -10]
// ➞ [10, 764, 0]
// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
function longBurp(number) {
    let result = 'r';
    // for (let i = 0; i < number; i++) {
    //         result += 'r';
    // }
    // return `Bu${result}p`;
    return 'Bu' + result.repeat(number).concat('p');
}
// console.log(longBurp(3));
// console.log(longBurp(5));
// console.log(longBurp(9));
// ➞ "Burrrp"
// ➞ "Burrrrrp"
// ➞ "Burrrrrrrrrp"
// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:

function obj() {
    let { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" };
    // rest == { city: "Phoenix", state: "AZ", country: "USA" };
    return rest;
}
// console.log(obj());

// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.
function ctoa(char) {
    // return char.charCodeAt(char);
}
// console.log(ctoa("A")); 
// console.log(ctoa("m")); 
// console.log(ctoa("[")); 
// console.log(ctoa('\\')); 
// ➞ 65
// ➞ 109
// ➞ 91
// ➞ 92
// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
function totalCups(numberOfCups) {
    let result = 0;
    if (numberOfCups <= 6) {
        result = numberOfCups + 1;
    } else {
        result = numberOfCups / 6 * 7;
    }
    return parseInt(result);
}
// console.log(totalCups(6));
// console.log(totalCups(12));
// console.log(totalCups(213));
// ➞ 7
// ➞ 14
// ➞ 248
// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.
function wordLengths(arr) {
    let result = [];
    // arr.filter((arr, item, index) => {
    //     result.push(arr.length);
    // });
    // return result;

    // let a =  [123];
    // let b= 0;
    // a.filter((arr, item, index)=>{
    //     b = arr;
    // }) 
    // return b;
    for (let i = 0; arr[i] != undefined; i++) {
        result.push(arr[i].length);
    }
    return result;
}
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));
// ➞ [5, 5]
// ➞ [9, 12, 9]
// ➞ [3, 5, 9, 4, 2, 3, 8]

