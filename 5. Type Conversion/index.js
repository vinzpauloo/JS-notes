// Type Conversion = change the data type of a value to another
//                      (strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are now", age, " years old");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza"); // If "" is empty, it will be false, but if you put anything, it becomes true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);