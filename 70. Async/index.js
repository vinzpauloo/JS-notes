//  async   =   makes a function return a Promise
//  await   =   makes a function wait for a Promise

// const loadFile = new Promise((resolve, reject) => {

//     let fileLoaded = true;
    
//     if (fileLoaded) {
//         resolve(`File loaded`);
//     }
//     else {
//         reject(`File not loaded`);
//     }
// });

// loadFile.then(value => console.log(value)).catch(error => console.log(error));

// async function loadFile() {
//     let fileLoaded = true;

//     if (fileLoaded) {
//         return `File loaded`;
//     }
//     else {
//         throw `File NOT loaded`;
//     }
// }

// function loadFile() {
//     let fileLoaded = true;

//     if (fileLoaded) {
//         return Promise.resolve(`File loaded`);        
//     }
//     else {
//         return Promise.reject(`File NOT loaded`);
//     }
// }

loadFile().then(value => console.log(value)).catch(error => console.log(error));

