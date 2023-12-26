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
console.log(negate([1, 2, 3, 4]));// ➞ [-1, -2, -3, -4]
console.log(negate([-1, 2, -3, 4]));// ➞ [1, -2, 3, -4]
console.log(negate([]));// ➞ []

