// Arithmetic operator
// 1.normal function
// 2.arrow function,3.anonymous function,4. function declaration,5.naming function expration 6.call back


// ==========
// function name is a calling statement
function normal(){
    return true; //return statement
}
console.log(normal()) //Call function
// ===========

// ===========
// arrow function
const arr = (a,b)=>(a*b)
console.log(arr(1,3))
// ===========

// ===========
// function declaration
// function name is actual declaration
// ===========

// ===========
// function expration
const funExp = function(a,b){
    return a-b
}
(3,4)
console.log(funExp)