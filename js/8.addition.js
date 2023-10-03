function addition(num1, num2) {
    // return +num1+(+num2)
    // return Number(num1)+Number(num2)
    // return num1/1+num2/1
    // return num1*1+num2*1
    // return num1-0+(+num2-0)
    // return parseInt(num1)+parseInt(num2)
    // return parseFloat(num1)+parseFloat(num2)
    // return Math.max(num1)+Math.max(num2)
    // return Math.min(num1) + Math.min(num2)
    // return Math.floor(num1) + Math.floor(num2)
    // return Math.ceil(num1) + Math.ceil(num2)
    // return Math.round(num1) + Math.round(num2)
    return Math.fround(num1) + Math.fround(num2)
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
console.log(addition('7', '3'));
console.log(addition('7', 3));