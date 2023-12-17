// 21 ==> Profitable Gamble
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//     profitableGamble(0.2, 50, 9) ➞ true
//     profitableGamble(0.9, 1, 2) ➞ false
//     profitableGamble(0.9, 3, 2) ➞ true
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.


function profitableGamble(prob, prize, pay) {
    return prob * prize - pay > 0;

}
// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));
// ➞ true
// ➞ false
// ➞ true

// 22 ==> Frames Per Second
//     Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//     frames(1, 1) ➞ 60
//     frames(10, 1) ➞ 600
//     frames(10, 25) ➞ 15000
//     FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
//     Assume the screen produces 60 frames every second.
function frames(num1, num2) {
    let perSecond = 60;
    return perSecond * (num1 * num2);
}
// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

// 23 ==> Drinks Allowed?
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//     shouldServeDrinks(17, true) ➞ false
//     shouldServeDrinks(19, false) ➞ true
//     shouldServeDrinks(30, true) ➞ false
//     Return true or false.
//     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.
function shouldServeDrinks(age, yesOrNo) {
    return age >= 18 && yesOrNo == false;
}
// console.log(shouldServeDrinks(17, true));
// console.log(shouldServeDrinks(19, false));
// console.log(shouldServeDrinks(30, true)); 

// 24 ==> Is the String Empty?
//     Create a function that returns true if a string is empty and false otherwise.
//     isEmpty("") ➞ true
//     isEmpty(" ") ➞ false
//     isEmpty("a") ➞ false
//     A string containing only whitespaces " " does not count as empty.
function isEmpty(str) { return str === ""; }
// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));


// 25 ==> Compare Strings by Count of Characters
//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// console.log("25 --->");
function comp (str1,str2) {
    return str1.length === str2.length;
}
console.log(comp("AB", "CD"));
console.log(comp("ABD", "DE"));
console.log(comp("hello", "moien khan"));