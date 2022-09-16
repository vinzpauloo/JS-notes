//  async = makes a function RETURN a Promise
//  await = makes a function WAIT for a Promise

// async function loadFile() {

//     let loadFile = false;
    
//     if (loadFile) {
//         return `File loaded`;
//     }
//     else {
//         throw `File NOT loaded`
//     }
// };

// loadFile().then(value => console.log(value)).catch(error => console.log(error));

// async function display() {
//     try{
//         document.getElementById(`myH1`).innerHTML = await loadFile();
//     }
//     catch (error){
//         document.getElementById(`myH1`).innerHTML = error;
//     }
// }
// display();



async function loadFile() {

    const promise = new Promise((resolve, reject) => {
        let loadFile = true;
    
        if (loadFile) {
            resolve `File loaded`;
        }
        else {
            reject `File NOT loaded`
        }
    })
    
    try{
        document.getElementById(`myH1`).innerHTML = await promise;
    }
    catch (error){
        document.getElementById(`myH1`).innerHTML = error;
    }
};
loadFile();