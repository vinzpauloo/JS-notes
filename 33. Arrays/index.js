//array =   think of it as a variable
//          that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut";

fruits.push("lemon");   //add an element
fruits.pop();           //removes last element
fruits.unshift(`Mango`);//add element to the beginning
fruits.shift();         //removes element from the beginning

let length = fruits.length;
let index = fruits.indexOf(`kiwi`);

console.log(index);
console.log(length);