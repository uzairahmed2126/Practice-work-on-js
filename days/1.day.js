// 1.
function addition(num1, num2) {
    // return +num1 + +num2;
    // return num1 / 1 + num2/1;
    // return num1 * 1 + num2*1;
    // return Number(num1+num2);
    // return Number.parseInt(num1 + num2);
    return (num1 - 0) + (num2 - 0)
}
// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));
// console.log(addition('7', '3'));
// console.log(addition('7', 3));

// ➞ 5
// ➞ -9
// ➞ 10
// ➞ 10
// ➞ 10
// 2.
function convert(hour) {
    return 60 * hour;
}
// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));
// console.log(convert('2'));

// ➞ 300
// ➞ 180
// ➞ 120
// ➞ 120
// 3.
function addition(add) {
    // return 1+ +add
    // return 1 + Number(add)
    // return 1+Math.max(add)
    // return 1+parseInt(add)
    // return 1 + add * 1
    // return 1 + (add / 1)
    // return 1 + parseFloat(add);
}
// console.log(addition(0));
// console.log(addition('9'));
// console.log(addition('-3'));
// ➞ 1
// ➞ 10
// ➞ -2
// 4.
function giveMeSomething(addSomething) {
    let a = '';
    let letter = "Something "
    // return letter + addSomething
    // return a.concat(letter, addSomething)
    // return  letter + addSomething;
    // return  `${letter + addSomething}`
}
// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));
// ➞ "something is better than nothing"
// ➞ "something Bob Jane"
// ➞ "something something"


function triArea(base, hieght) {
    return base * hieght / 2
}
// console.log(triArea(3, 2));
// console.log(triArea(7, 4));
// console.log(triArea(10, 10));
// ➞ 3
// ➞ 14
// ➞ 50


// `Convert Hours into Seconds`
function howManySeconds(hours) {
    const oneHour = 60;
    const oneMinute = 60;
    return oneHour * oneMinute * hours
}
// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(24));

//   ➞ 7200
// ➞ 36000
// ➞ 86400

function getFirstValue(arr) {
    const firstVal = arr[0];
    // return firstVal;
    // return arr.shift();
    let a = 0;
    for (let i = 0; arr[i] != undefined; i++) {
        if (i == 0) {
            a = arr[i]
        }
    }
    return a;
}
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));
//   ➞ 1
// ➞ 80
// ➞ -500

function nextEdge(num1, num2) {
    const finalAns = num1 + num2 - 1;
    return finalAns;
}
// console.log(nextEdge(8, 10));
// console.log(nextEdge(5, 7));
// console.log(nextEdge(9, 2));
//   ➞ 17
//  ➞ 11
//  ➞ 10

// `Find the Perimeter of a Rectangle`
//   `Create a function that takes length and width and finds the perimeter of a rectangle.`
function findPerimeter(width, hieght) {
    const perimeterAns = (hieght + width) * 2;
    return perimeterAns;

}
// console.log(findPerimeter(6, 7));
// console.log(findPerimeter(20, 10));
// console.log(findPerimeter(2, 9));

//   ➞ 26
// ➞ 60
// ➞ 22



// `Return the Remainder from Two Numbers`
// `There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`
function remainder(num1, num2) {
    const result = num1 % num2;
    return result;
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));
// ➞ 1
// ➞ 3
// ➞ -9
// ➞ 0