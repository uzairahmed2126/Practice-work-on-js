let num = ['123'];
let obj = {a:'123'};
// console.log(Number(num))
// console.log(Number(obj.a))

// 1.parsfloat
let float = 21.1
// console.log(Number.parseFloat(float))

// 2.parsint
let int = 1.2
// console.log(Number.parseInt(int))
// console.log(123===123.0)//true

// 3.isfinite check the value is countable or not
let finite = 2-139
// console.log(Number.isFinite(finite))

// 4.isInt
let isint = 2.139
// console.log(Number.isInteger(isint))

// 5.tofix set the decimal value
let tofix = 1.100
// console.log(tofix.toFixed(50))

// 6.Precision
let Precision =12
console.log(Precision.toPrecision(6))

