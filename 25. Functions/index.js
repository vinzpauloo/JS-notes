// function =  Define code once, and use it many times.
//             To perform some code, call the function name.

// console.log("Happy birthday to you!");
// console.log("Happy birthday to you!");
// console.log("Happy birthday dear ___");
// console.log("Happy birthday to you!");
// console.log("You are ____ years old!");

// console.log("Happy birthday to you!");
// console.log("Happy birthday to you!");
// console.log("Happy birthday dear ___");
// console.log("Happy birthday to you!");
// console.log("You are ____ years old!");

// console.log("Happy birthday to you!");
// console.log("Happy birthday to you!");
// console.log("Happy birthday dear ___");
// console.log("Happy birthday to you!");
// console.log("You are ____ years old!");

startProgram();

function startProgram() {
    let userName = "Bro";
    let age = 21;

    happyBirthday(userName, age);
}



function happyBirthday(userName, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old!");
}