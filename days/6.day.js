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
// function returnFromContainer(str) {
//     const newStr = str.trim().toLowerCase();
//   const container = {
//     bread: "bag",
//     beer: "bottle",
//     canday: "plastic",
//     cheese: null,
//   };
//   // dot annotation -> obj.
//   // bracket annotation -> obj[]
//   return container[newStr];
// }
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
    // return `${obj.name} Has Population Of ${obj.population} ${(obj.continent) ?  ' and is situated in '+(obj.continent) : ''}`
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
//     Volume is length * width * height.

function volumeOfBox(area) {
    return area.width * area.length * area.height;
}
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));
// ➞ 10
// ➞ 16
// ➞ 30

// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str) {
    const getFirstTwoVal = str.slice(0, 2);
    const addThreeDotes = getFirstTwoVal.concat('... ').repeat(2).concat(str, "?");
    // return addThreeDotes + ' ' + addThreeDotes + ' ' + str + '?';
    return addThreeDotes;
}
// console.log(stutter("incredible"));
// console.log(stutter("enthusiastic"));
// console.log(stutter("outstanding"));
// ➞ "in... in... incredible?"
// ➞ "en... en... enthusiastic?"
// ➞ "ou... ou... outstanding?"


// 57 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
function isPlural(words) {
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i] === 's') {
    //         // return true;
    //     };
    // };
    // here i using arithmetic operator because the boolean value are only 0 and 1 but here. the answer is not 0 or one that's why i use greater than operation
    if (words.lastIndexOf('s') > -1) {
        // return Boolean(words.lastIndexOf('s'));
        return words !== false;
    };
    return false;
}
// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));
// console.log(isPlural("magic"));
// ➞ true
// ➞ false
// ➞ true
// ➞ false


// 58 ==> Four Passengers and a Driver
//     A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
function carsNeeded(passengers) {
    const passengersCanSeat = 5;
    let cars = 0;
    cars = passengers / passengersCanSeat;
    return Math.ceil(cars);
}
// console.log(carsNeeded(5));
// console.log(carsNeeded(11));
// console.log(carsNeeded(2));
// console.log(carsNeeded(0));

// ➞ 1
// ➞ 3
// ➞ 0

// 59 ==> ES6: Destructuring Arrays IV
//     There is an easy way to assign to array values to the nth index by using the Rest element.
//     But how could I make tail = [2, 3, 4] instead of tail = 2?
function headTail() {
    var [head, ...tail] = [1, 2, 3, 4];
    console.log(head);
    console.log(tail);
}
// headTail()

// 60 ==> ES6: Destructuring Arrays III
//     You can assign variables from arrays with destructuring like this:
//     But you can also skip over items in the array being destructured. (takeout only lips)
function bodyParts() {
    const arr = ["eyes", "nose", "lips", "ears"];
    let [eyes, nose, lips, ears] = arr;
    console.log(lips)
}
// bodyParts();