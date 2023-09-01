// 1.at method return the index value
let arr = ['a', 'b', 'c']
// console.log(arr.at(0))

// 2.length
let arrLength = ['uzair', 'fayyaz']
// console.log(arrLength.length)

// 3.concat concat the array
let ar1 = ['uzair']
let ar2 = ['ahmed']
// console.log(ar1.concat(ar2))

// 4.copywithin 
let copywithin = ['0', '1', '2', '3', '4', '5', '6', '7']
// console.log(copywithin.copyWithin(2, 2, 7))

// 5.entries 
let entris = ['apple', 'banana', 'kivi', 'she said abba nhi manenge'];
let DilJaleAAsiq = entris.entries(entris)
// console.log(DilJaleAAsiq.next().value);

// 6.every it is a callback function and it's throw true and false when it find less then given value is find or not it's depends
let arrr = [1, 2, 3, 4, 5, 6]
// console.log(arrr.every((a) => {
//     return a < 5;
// }))

// 7.some it is check the all value when it's find same then it's throw true niether false
let som = [1, 2, 3, 4, 5, 6]
// console.log(som.some((a) => {
//     return a < 5
// }))

// 8.fill 
let fill = [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(fill.fill('kayda', 2, 7))

// 9.filter method return the given value as it find
let filtermethod = [1, 2, 3, 4, 4, 6, 4, 3];
// console.log(filtermethod.filter((e) => {
//     return e >= 4;
// }))

// 10.find
// let Find = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(Find.find((e) => {
//     return e > 1;
// }))

// 11.findIndex
// let Findind = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(Findind.findIndex((e) => {
//     return e < 8;
// }))

// 12.findlastIndex
// let Findlast = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(Findlast.findLastIndex((e) => {
//     return e > 1;
// }))

// 13.flat
// var a = [5, 10, [[20, 30]]]
// console.log(a.flat())

// 14.forEach
// let forEch = [1, 2, 3, 4, 5, 6, 7, 8];
// let forEch1 = forEch.forEach((e, ind) => {
//     console.log(e, ind)
// })

// 15.from it's broke the string in the each character
// console.log(Array.from('uzair ahmed'))


// 16.include method it is find have or not
let incld = [3, 343]
// console.log(incld.includes(3))

// 17.indexOf
let indof = [4, 42, 2]
// console.log(indof.indexOf(42))

// 18.isArray
let isarr = [13]
// console.log(Array.isArray(isarr))

// 19.join 
let JOIN = ['adnan', 'fayyaz', 'uzair']
// console.log(JOIN.join(' '))

let num = [1, 2, 3, 4]
// console.log(num.join('/'))

// 20.lastIndexof
let lastIndex = [1, 2, 3, 4, 5]
// console.log(lastIndex.lastIndexOf(5))

// 21.Map method it is a itirator return new array
let MapM = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(MapM.map(e => e ** 2))

// 22.arrayof it is return the array into string and number into array
// console.log(Array.of('fayyaz'))

// 23.pop remove the last value and return the removed value
let PoP = [2,3,5,3]
// console.log(PoP.pop())

// 24.push
let PuSh = [2,3,5,3]
PuSh.push('fayyaz')
// console.log(PuSh)

// 25.shift
let SHif_t = [233,23,2,9]
// console.log(SHif_t.shift());

// 26.Unshift add value at the first index
let UNSHif_t = [233,23,2,9]
UNSHif_t.unshift('fayyaz')
// console.log(UNSHif_t);

// 27.reverse
let REVERSE =[9,8,7,6]
// console.log(REVERSE.reverse())

// 28.sort
let SORT =[0,34,909,1]
// console.log(SORT.sort())

// 29.slice it's like a cake it's take 2 cutting side and given the piece of the selected side
let SLICE =[0,34,909,1]
// console.log(SLICE.slice(1,4))

// 30.splice
let SPLICE =[0,34,909,1]
// console.log(SPLICE.splice(0,2,4))

// 31.reduce
let REDUCE = [7,34,23]
console.log(REDUCE.reduce((crrunt,accumulator)=>{
    return crrunt+accumulator
}))


var a = [10.5,3.4,1.1,6.7];
var b = a.reduce(function(a,b){
  return a + b
})
console.log(b)