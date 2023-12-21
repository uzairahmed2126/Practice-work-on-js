// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    // return str.includes(" ");
    // let result = str.match(' ');

    // return result;
    // for (let i = 0; str[i] != undefined; i++) {
    //     if(str[i]===' ') {
    //         return true;
    //     };
    // };
    // return false;
};
// console.log(hasSpaces("hello"));
// console.log(hasSpaces("hello, world"));
// console.log(hasSpaces(" "));
// console.log(hasSpaces(""));
// console.log(hasSpaces(",./!@#"));

// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
function getContainer(products) {
    // if(products==='Bread') {
    //     return "bag"
    // }
    // let str = ['bag', 'bottle', 'plastic'];
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === "Cheese") {
    //         return null
    //     } else {
    //         return str;
    //     }
    // }
    if (products === "Bread") {
        return "bag";
    }
    else if (products === "Beer") {
        return "bottle";
    } else if (products === "Candy") {
        return "plastic";
    } else {
        return 'null';
    };
};
// console.log(getContainer("Bread"));//bag
// console.log(getContainer("Beer"));//bottle
// console.log(getContainer("Candy"));//plastic
// console.log(getContainer("Cheese"));//null

// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
function numberArgs(...parameters) {
    let a = 0;
    for (let i = 0; i < parameters.length; i++) {
            a += i;
    };
    return parameters.length;
};
console.log(numberArgs("a", "b", "c"));
console.log(numberArgs(10, 20, 30, 40, 50));
console.log(numberArgs('x', 'y'));
console.log(numberArgs());


// ➞ 3
// ➞ 5
// ➞ 2
// ➞ 0