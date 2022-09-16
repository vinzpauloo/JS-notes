//  object  =   A group of properties and methods
//              properties = what an object has
//              methods = what an object can do
//              user . to access properties/methods



const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive:  function () {
        console.log(`You drive the car`);
    },
    brake:  function () {
        console.log(`You step on the breaks`);
    }
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive:  function () {
        console.log(`You drive the car`);
    },
    brake:  function () {
        console.log(`You step on the breaks`);
    }
}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();
