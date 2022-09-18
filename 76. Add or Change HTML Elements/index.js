//  add/change HTML elements
//  .innerHTML (vulnerable to XSS attacks)(XSS = Cross site scripting attacks)
//  .textContent(more secure)

// const nameTag = document.createElement(`h1`);
// nameTag.textContent = window.prompt(`Enter your name:`);
// document.body.append(nameTag);

const myList = document.querySelector(`#fruit`);
const listItem = document.createElement(`li`);
listItem.textContent = `mango`;
// myList.append(listItem); //add to the bottom of list
// myList.prepend(listItem); //add to the beginning of the list
myList.insertBefore(listItem, myList.getElementsByTagName(`li`)[1]);
