// 1.at method return the index value
let arr = ['a', 'b', 'c']
console.log(arr.at(0))

// 2.length
let arrLength = ['uzair', 'fayyaz']
console.log(arrLength.length)

// 3.concat concat the array
let ar1 = ['uzair']
let ar2 = ['ahmed']
console.log(ar1.concat(ar2))

// 4.copywithin 
let copywithin = ['0', '1', '2', '3', '4', '5', '6', '7']
console.log(copywithin.copyWithin(2, 2, 7))

// 5.entries 
let entris = ['apple', 'banana', 'kivi', 'she said abba nhi manenge'];
let DilJaleAAsiq = entris.entries(entris)
console.log(DilJaleAAsiq.next().value);

// 6.every it is a callback function and it's throw true and false when it find less then given value is find or not it's depends
let arrr = [1,2,3,4,5,6]
console.log(arrr.every((a)=>{
    return a<5;
}))

// 7.some it is check the all value when it's find same then it's throw true niether false
let som = [1,2,3,4,5,6]
console.log(som.some((a)=>{
    return a<5
}))

// 8.actual


