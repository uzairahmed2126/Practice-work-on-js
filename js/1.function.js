// scope and function expression kyle symption 3 module
// Arithmetic operator
// 1.normal function
// 2.arrow function,3.anonymous function,4. function declaration,5.naming function expration 6.call back


// ==========
//1. function name is a calling statement
function normal() {
    return true; //return statement
}
console.log(normal()) //Call function
// ===========

// ===========
//2. arrow function
const arr = (a, b) => (a - b)
console.log(arr(1, 3))


const addition =(a,b,c)=>(a+b-c)
console.log(addition(4,5,3))
// ===========

// ===========
// function declaration
// function name is actual declaration
// ===========

// ===========
//3. function expration
const funExp = function (a, b) {
    return a - b
}
// (3,4)
// console.log(funExp)
// ===========

// (function(){
//     console.log('asdfasdf')
// })
// ()
// ===========

// function naming
const fnName= function(){
    console.log('fayyyaz')
}
fnName()