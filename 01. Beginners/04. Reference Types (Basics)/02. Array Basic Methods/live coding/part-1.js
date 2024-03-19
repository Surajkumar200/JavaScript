// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit",
];

console.log(fruits);
fruits.push("banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();

fruits.unshift("orange");

// CONCAT
const fruit = ["apples", "pomegranate", "mango"];
let moreFruits = ["strawberries", "pineapple", "grapefruit"];
let totalFruits = fruit.concat(moreFruits);

console.log(fruits);
console.log(fruit);
console.log(totalFruits)