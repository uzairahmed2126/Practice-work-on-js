// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    let result = 0;
    for (let i = 0; str[i] != undefined; i++) {
        // if (str[i] === ' ') {
        //     result = true;
        // }else {
        //     result = false;
        // }
        result = str
    }
    return result;
    // return str.includes(' ')
}
console.log(hasSpaces("hello"))
console.log(hasSpaces("hello, world"))
console.log(hasSpaces(" "))
console.log(hasSpaces(""))
console.log(hasSpaces(",./!@#"))
