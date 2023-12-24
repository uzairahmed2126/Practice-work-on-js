// 71 ==> Get the File Name
//     Create a function that returns the selected filename from a path. Include the extension in your answer.
function getFilename(path) {
    let splitedArr = path.split("/");
    // let result = '';
    // for (let i = 0; i < splitedArr.length; i++) {
    //     result = splitedArr[i]
    // }
    // return result;
    // return splitedArr[splitedArr.length - 1];
};
// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
// console.log(getFilename("ffprobe.exe"));
// ➞ "edabit.txt"
// ➞ "Beethoven_5.mp3"
// ➞ "ffprobe.exe"

// 72 ==> Nth Star Number
//  Create a function that takes a positive integer and returns the nth "star number".
//  A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
function starNumber(n) {
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "Please provide a positive integer.";
    };
    return 6 * n * (n - 1) + 1;
}
console.log(starNumber(2));
console.log(starNumber(3));
console.log(starNumber(5));
// ➞ 13
// ➞ 37
// ➞ 121