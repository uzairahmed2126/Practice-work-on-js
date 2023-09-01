// 1.assign method
let obj = { age: 23, person: 'fayyaz' }
// obj.age=0
// obj.age=0
let secOBJ = { age: 12, person: 'moufique' }
let third = Object.assign(obj, secOBJ)
// console.log(third)

// 2.object create
let objcreate = { }
let objcreate2 = Object.create(objcreate)
objcreate2.age=12;
objcreate2.name='heyy';
objcreate2.gender='heyy';
objcreate2.city='heyy';
objcreate2.work='heyy';
// console.log(objcreate2)

// 3.object define
let objectDefine = {}
Object.defineProperty(objectDefine,'age',{
    value:30
})
// console.log(objectDefine)

// 4.entries convert the object into the array
let entries = {age:21,name:'fayyaz'}
// console.log(Object.entries(entries))


// 5.freezeMethod we can't overwrite the value 
const e = {
    o : 'oye',
    b : 'baby',
    c : 'chocklate',
    k : 'khalo',
}
e.b='fayyaz'
Object.freeze(e)
// console.log(e)


// 6.from entries array to object
const a = new Map([
    ['saif','fayyaz'],
    ['banan','apple'],
    ['adnan','fayyaz'],
])
console.log(Object.fromEntries(a))

