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
console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9));
// ➞ "triangle"
// ➞ "circle"
// ➞ "nonagon"
//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!
// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
    // let result =  arr[arr.length - 1] * 2;
    // return result;
    // let filterdArr = arr.filter(function (index,item,arr) {
    //     return arr[item];
    // });
    // return filterdArr
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }
    return result
}
console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));
// ➞ [4, 10, 6]
// ➞ [2, 172, -10]
// ➞ [10, 764, 0]
// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
//         longBurp(3) ➞ "Burrrp"
//         longBurp(5) ➞ "Burrrrrp"
//         longBurp(9) ➞ "Burrrrrrrrrp"
// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//         let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//         rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.
//         ctoa("A") ➞ 65
//         ctoa("m") ➞ 109
//         ctoa("[") ➞ 91
//         ctoa("\") ➞ 92
// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
//         totalCups(6) ➞ 7
//         totalCups(12) ➞ 14
//         totalCups(213) ➞ 248
// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.
//         wordLengths(["hello", "world"]) ➞ [5, 5]
//         wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
//         wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

