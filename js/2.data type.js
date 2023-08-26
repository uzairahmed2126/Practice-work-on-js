// type premitive or nonpremitive
// 1.number 2.string 3.boolean 4.undefined 5.null 6.symbol 7.big int
// Rest are nonpremitive like array object and the function


// premitive //parent
// const num = 4;
// const str = 'str';
// const boolean = true;
// const undef = undefined;
// const nul = null;
// const symbl = Symbol(); //uniqe
const bigINt = BigInt;//return the large integer values
// console.log(typeof bigINt)

let a = 6726257467625742674674657467267467546745674672564756n;
// console.log(a)

// It's a king no one can compare to the king
let smbl = Symbol('#$@Q#$')
let smbl2 = Symbol('#$@Q#$')
// console.log(smbl===smbl2)

// nonpremetive
const arr = [23,'34',true,null,undefined]
console.log(arr)
// const obj = {}
// const fun = function(){}
// console.log(typeof fun)
let arr23;
console.log(arr23)

// undeclare
let = 89;
console.log(let)

// uninitilize
a1=3 ;
console.log(a1)


// negative 0
console.log(0 > -0)
console.log(0 < -0);
console.log(0 == -0);//It's not a true 0 is not equal to -0
console.log(Object.is(0,-0));

// NANisNAN //invalid number
console.log(isNaN(Infinity))
