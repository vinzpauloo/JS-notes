const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

//shifting of elements
myButton.addEventListener(`click`, () => {
  console.log(myImg.style.display);
  if (myImg.style.display === "none") {
    myImg.style.display = "block";
  } else {
    myImg.style.display = "none";
  }
});

//no shifting of elements
// myButton.addEventListener(`click`, () => {
//   console.log(myImg.style.display);
//   if (myImg.style.visibility === "hidden") {
//     myImg.style.visibility = "visible";
//   } else {
//     myImg.style.visibility = "hidden";
//   }
// });
