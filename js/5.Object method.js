// 1.assign method
let obj = { age: 23, person: 'fayyaz' }
// obj.age=0
// obj.age=0
let secOBJ = { age: 12, person: 'moufique' }
let third = Object.assign(obj, secOBJ)
// console.log(third)

// 2.object create
let objcreate = {}
let objcreate2 = Object.create(objcreate)
objcreate2.age = 12;
objcreate2.name = 'heyy';
objcreate2.gender = 'heyy';
objcreate2.city = 'heyy';
objcreate2.work = 'heyy';
// console.log(objcreate2)

// 3.object define
let objectDefine = {}
Object.defineProperty(objectDefine, 'age', {
    value: 30
})
// console.log(objectDefine)

// 4.entries convert the object into the array
let entries = { age: 21, name: 'fayyaz' }
// console.log(Object.entries(entries))


// 5.freezeMethod we can't overwrite the value 
const e = {
    o: 'oye',
    b: 'baby',
    c: 'chocklate',
    k: 'khalo',
}
e.b = 'fayyaz'
Object.freeze(e)
// console.log(e)


// 6.from entries array to object
const a = new Map([
    ['saif', 'fayyaz'],
    ['banan', 'apple'],
    ['adnan', 'fayyaz'],
])
// console.log(Object.fromEntries(a))

// 7.getOwnPropertyNames throw the property name
let firstobj = { a: 90, b: 'me hu giyaan', c: 'Doraemon' }
// console.log(Object.getOwnPropertyNames(firstobj))

// 8.hasown 
let hasown = { a: '1', b: 'adnan you should have to stop the background sound' }
let hasornot = { a: '1' }
// console.log(Object.hasOwn(hasown, 'b'));

// 9.hasOwnProerty It is a check the property is exist or not
let hasownp = { a: '1', b: 'abcd' }
// console.log(hasown.hasOwnProperty('c'));

// 10.isfrozen check the value is freeze or not 
let isfrozen = {a:'hey',b:'hello'}
Object.freeze(isfrozen)
// console.log(Object.isFrozen(isfrozen))

// 11.seal when we seal the object the we can add the object
let sealM = {a:'hey'}
Object.seal(sealM)
delete sealM.a
// console.log(sealM.a)

// 12.issealed check is sealed or not
let issealed = sealM
// console.log(Object.isSealed(issealed))

// 13.keys 
let key = {property1:'a',property2:'b'}
// console.log(Object.keys(key))

// 14.preventExtensions
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  });
} catch (e) {
//   console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}

// 15.object-prototype-tostring-method
// let prototypeM = {a:45,b:90}
// console.log(prototypeM(Object.prototype.toString()))