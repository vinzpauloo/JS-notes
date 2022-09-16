// arrow function   =   compact alternative to a traditional function expression
//      =>

// const greeting = userName => console.log(`Hello ${userName}`);


// greeting(`Bro`);

// const percent = function (x, y) {
//     return x / y * 100;
// }
// const percent = (x, y) => x / y * 100;

// console.log(`${percent(80,150)}%`);

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort((x, y) => x - y);
// grades.sort(function (x, y) {
//     return x - y;
// });
grades.forEach(print);

// grades.sort(descendingSort);
// grades.forEach(print);

// function descendingSort(x, y) {
//     return y - x;
// }
// function ascendingSort(x, y) {
//     return x - y
// }

function print(output) {
    console.log(output);
}


