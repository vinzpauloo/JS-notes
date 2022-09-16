// Formula: C is equal to the square root of a squared + b squared

// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// // c = Math.pow(a, 2) + Math.pow(b, 2);
// // c = Math.sqrt(c);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("The hypotenuse is: ", c);

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function () {


    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    console.log("First side is: ",a);
    console.log("Second side is: ", b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    console.log("The hypotenuse is: ", c);
    document.getElementById("cLabel").innerHTML = "Side C is: " + c;
}