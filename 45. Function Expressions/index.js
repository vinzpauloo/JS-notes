//  function expression =   function without a name (anonymous function)
//                          avoid polluting the global scope with names
//                          Write it, then forget about it
// NON FUNCTION EXPRESSION
// sayHello();

// function sayHello() {
//     console.log(`Hello!`);
// }

// FUNCTION EXPRESSION
// const greeting = function () {
//     console.log(`Hello!`);
// }

// greeting();
let count = 0;

// NON FUNCTION EXPRESSION
// function increaseCount() {
//     count += 1;
//     document.getElementById(`myLabel`).innerHTML = count;
// }
// function decreaseCount() {
//     count -= 1;
//     document.getElementById(`myLabel`).innerHTML = count;
// }

//FUNCTION EXPRESSION
document.getElementById(`increaseBtn`).onclick = function () {
    count += 1;
    document.getElementById(`myLabel`).innerHTML = count;
}
document.getElementById(`decreaseBtn`).onclick = function () {
    count -= 1;
    document.getElementById(`myLabel`).innerHTML = count;
}