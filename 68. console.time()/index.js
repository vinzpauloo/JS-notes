//  console.time()  =   Starts a timer you can use to
//                      track how long an operation takes
//                      Give each timer a unique name.

//start
console.time(`Response time`);

// alert(`CLICK THE OKAY BUTTON!`);
setTimeout(() => console.log(`Hello`), 3000);

//end
console.timeEnd(`Response time`);