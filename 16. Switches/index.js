// switch =    statement that examines a value
//             for a match against many case clauses.
//             More efficient than many "else if" statements

let grade = 59;

// if (grade == "A") {
//     console.log("You did great!");
// }
// else if (grade == "B") {
//     console.log("You did good!");
// }
// else if (grade == "C") {
//     console.log("You did okay!");
// }
// else if (grade == "D") {
//     console.log("You passed...barely!");
// }
// else if (grade == "F") {
//     console.log("YOU FAILED!");
// }
// else {
//     console.log(grade, "is not a letter grade");
// }

switch (true) {
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed...barely!");
        break;
    case grade < 60:
        console.log("YOU FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade");
        break;
}