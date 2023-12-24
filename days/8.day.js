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