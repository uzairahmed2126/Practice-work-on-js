// string target the 
// 1.length
let str = 'abcdefghijklmnopqrstuvwxyz'
console.log(str.length)

// 2.at metthod return the given index value
let atMethod = 'uzair ahmed'
// console.log(atMethod.at(2))

// 3.charat same as at method
let charAt = 'Adnan Belim'
console.log(charAt.charAt(2))

// 4.charCodeat Return the ASCII or sky 
let charCodeat = 'Fayya ur rehman'
console.log(charCodeat.charCodeAt(1))

// 5.codePointat as work charCodeAt
let codePointat = 'Oye chal chai pite'
console.log(codePointat.codePointAt(6))

// 6.concat
let firstName = 'Uzair'
let LastName = 'Ahmed'
console.log(firstName.concat('\n' + LastName));

// 7.startwith
let startwith = 'escape sequence'
console.log(startwith.startsWith('e'))

// 8.endwidth
let endwith = 'end with'
console.log(endwith.endsWith('h'))

// 9.fromcharcode return the word from the ASCII or sky number
let fromcharcode = 97
console.log(String.fromCharCode(fromcharcode))

// 10.includes return the boolean if value exist or not
let Incld = 'hey'
console.log(Incld.includes('hey'))

// 11.IndexOf
let IndexOf = 'My name is fayyaz'
console.log(IndexOf.indexOf('fayyaz'))

// 12.lastIndex
let lastIndex = 'My name is Adnan My name is Adnan'
console.log(lastIndex.lastIndexOf('Adnan'))

// 13.localCompare it throw binary value
let text1 = "ab";  //before
let text2 = "fb";   //after
let result = text1.localeCompare(text2);
console.log(result)

// 14.match return the character
let Cartoon = 'My Fav Cartoon Is Doraemon'
let secCartoon = /[a-z]/g
console.log(Cartoon.match(secCartoon))

// 15.normalization

// 16.padstart
let padstart = 'fayyaz'
console.log(padstart.padStart(10,'k'));


// 16.padend
let padend = 'fayyaz'
console.log(padend.padEnd(10,' k'));

// 17.repeat work like loop
let repeat = 'hey oye hey oye'
console.log(repeat.repeat(10))

// 18.replace 
let replace = 'hey you are a bad guy'
console.log(replace.replace('bad','good'))

// 19.replaceAll 
let replaceall = 'hey you are a bad guy'
console.log(replaceall.replaceAll('bad','good'))

// 20.search
let search ='hey ABCD'
console.log(search.search('A'));

// 21.slice 
let slic = 'Apple Banana Kivi Pormongrant'
console.log(slic.slice(12,17))

// 22.split
let split = 'hello hey'
console.log(split.split(' '));

// 23.substring it is stop 
let substring = 'jaane'
console.log(substring.substring(2,4))
// console.log(substr.length);

// 24.substr
let substR = 'hole'
console.log(substR.substr(2,3))
// console.log(substR.length);

// 25.touppercase
let uppr ='abcdefg'
console.log(uppr.toUpperCase())

// 26.tolowercase
let lowr ='ABCDEF'
console.log(lowr.toLowerCase())

// 27.toLocaleuppercase
let upprL ='abcdefg'
console.log(uppr.toLocaleUpperCase())

// 28.tostring 
let num = 1323;
console.log(num.toString())

// 29.trim remove the space in the existing string
let trm = '                fayyaz ur rahmaan'
console.log(trm.trim())

// 30.trimEnd remove the space from the last value in string
// 31.trimStart remove the space from the starting value in string

// 32.valueOf Default
let valueOf = 'abcd'
console.log(valueOf.valueOf())
// my logic
// let a = [];
    // for (let i = 65; i <= 90; i++) {
    //     let b = String.fromCharCode([i]);
    //     a.push(b);
    // }
    // textInput.addEventListener('input', (e) => {
    //     let a = '';
    //     let arr = [];
    //     a = e.target.value;
    //     console.log(a)
    //     if(a.toUpperCase()){
    //         a.toLowerCase();
    //         console.log(a);
    //     }else if(a.toLowerCase()){
    //         a.toUpperCase()
    //     }
    //     else if(e.target.value===''){
    //         a.split(' ');
    //         const sortedField = e.target.innerText;
    //         productData.sort((a, b) => {
    //             return a[sortedField] > b[sortedField] ? 1 : -1;
    
    //         });
    //         appendData();
    //     }
    //     else{
    //         console.log('lower')
    //     }
    //     arr.push(a);
    //     console.log(arr)
    // })
