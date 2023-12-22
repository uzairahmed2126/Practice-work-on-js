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
// console.log(numberArgs("a", "b", "c"));
// console.log(numberArgs(10, 20, 30, 40, 50));
// console.log(numberArgs('x', 'y'));
// console.log(numberArgs());


// ➞ 3
// ➞ 5
// ➞ 2
// ➞ 0

// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format: 
//     "X has a population of Y and is situated in Z" 
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).



function cityFacts(obj) {
    if (obj.continent === undefined) {
        return `${obj.name} has a population of ${obj.population}`;
    }
    return `${obj.name} has a population of ${obj.population}  and is situated in ${obj.continent}`;
}
// console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
// }));
// console.log(cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
// }));
// console.log(cityFacts({
//     name: "Tokyo",
//     population: "13,929,286"
// }));
// ➞ "Paris has a population of 2,140,526 and is situated in Europe"
// ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
// ➞ "Tokyo has a population of 13,929,286"

// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//         volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//         volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//         volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
//     Volume is length * width * height.
