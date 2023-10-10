function arrnegposbigger(arr) {
    let counter1 = 0;
    let counter2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter1++
        } else {
            counter2++
        }
    }
    if (counter1 > counter2) {
        console.log("this is negative number");
    } else {
        console.log("this is positive number");
    }
}
// console.log(arrnegposbigger([1, 2, 3, 4, 5, 6, 7 - 1, -2, -3, -4, -5, -6, -9, -8, -8]));


function isLastCharacterN(str) {
    for (let i = 0; i < str.length; i++) {
        // for (let j = 0; j <= i; j++) {
        //     if (str[j] === 'n') {
        //         return true
        //     }
        // }
        let a = str[i];
        if(a[a.length-1]==='n'){
            return true
        }
    }
    return false
}
console.log(isLastCharacterN("Aiden"))
console.log(isLastCharacterN("Piet"))
console.log(isLastCharacterN("Bert"))
console.log(isLastCharacterN("Dean"))