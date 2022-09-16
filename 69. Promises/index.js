//  promise =   object that encapsulates the result of an asynchronous operation
//              let asynchronous methods return values like synchronous methods
//              "I promise to return something in the future"

// const promise = new Promise((resolve, reject) => {
    
//     let fileLoaded = false;

//     if (fileLoaded) {
//         resolve(`File Loaded`);
//     }
//     else {
//         reject(`File NOT loaded`);
//     }
// });

// promise.then(value => console.log(value)).catch(error=>console.log(error));

// promise.then(function (value) {
//     console.log(value);
// });

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(()=>console.log(`thanks for waiting`));