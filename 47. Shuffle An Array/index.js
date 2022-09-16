// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);

// // console.log(cards[0]);
// //cards.forEach(card => console.log(card));
// // cards.forEach(function (card) {
// //     console.log(card);
// // });
// cards.forEach(print);

// function shuffle(array) {
//     let currentIndex = array.length;

//     while (currentIndex != 0 ) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;
// }

// function print(output) {
//     console.log(output);
// }

// let agents = [`Jassy`, `Joseph`, `Jhonmark`, `Joms`, `William`, `Tin`, `Kiko`, `Julius`];

// shuffle(agents);

// // agents.forEach(function (agent) {
// //     console.log(agent);
// // });

// // console.log(agents[0]);

// agents.forEach(agent => console.log(agent));

// function shuffle(arr) {
//     let currentAgent = arr.length;

//     while (currentAgent != 0) {
//         let randomAgent = Math.floor(Math.random() * arr.length);
//         currentAgent -= 1;

//         let tempAgent = arr[currentAgent];
//         arr[currentAgent] = arr[randomAgent];
//         arr[randomAgent] = tempAgent;
//     }
//     return arr;
// }

// // const greeting = function () {
// //     console.log(`Hello!!!!!!!!!`);
// // }
// // greeting();

// // const greeting = () => console.log(`Hi!!!!!`);
// // greeting();

let students = [`Evita`, `Katrina`, `Czarina`, `Denise`, `Bianca`];

shuffle(students);

// console.log(students);
//students.forEach(print);
//print(...students);
// for (let student of students){
//     console.log(student);
// }
// students.forEach(function (student) {
//     console.log(student);
// });
students.forEach((student) => console.log(student));
//console.log(students[0]);

function shuffle(arr) {
    let currentStudent = arr.length;
    
    while (currentStudent != 0) {
        let randomStudent = Math.floor(Math.random() * arr.length);
        currentStudent -= 1;

        let tempStudent = arr[currentStudent];
        arr[currentStudent] = arr[randomStudent];
        arr[randomStudent] = tempStudent;
    }
    return arr;
}
function print(output) {
    console.log(output);
}