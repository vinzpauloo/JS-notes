//  cookie  =   a small text file stored on your computer
//              used to remember information about the user
//              saved in name=value pairs

/* Checking to see if cookies are enabled. */
// console.log(navigator.cookieEnabled);

// document.cookie =
//   "firstName = Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// document.cookie =
//   "lastName = Star; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);

//setCookie(`email`, `Sponge@gmail.com`, 365);

// deleteCookie(`firstName`);
// deleteCookie(`lastName`);
// deleteCookie(`email`);

// setCookie(`firstName`, `Spongebob`, 365);
// setCookie(`lastName`, `Squarepants`, 365);

console.log(getCookie(`firstName`));
console.log(getCookie(`lastName`));

// console.log(document.cookie);

function setCookie(name, value, daysToLive) {
  const date = new Date();
  /* Setting the date to the current date plus the number of days to live.(daysToLive converted to milliseconds 24 hours * 60 minutes * 60 seconds * 1000 milliseconds) */
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie); //Decoding the cookie string
  const cArray = cDecoded.split("; ");
  let result = null;

  /* Looping through the array and checking to see if the name is in the array. If it is, it will
  return the value of the name. */
  cArray.forEach((element) => {
    if (element.indexOf(name) === 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

// deleteCookie(`firstName`);
// deleteCookie(`lastName`);

const firstText = document.querySelector(`#firstText`);
const lastText = document.querySelector(`#lastText`);
const submitBtn = document.querySelector(`#submitBtn`);
const cookieBtn = document.querySelector(`#cookieBtn`);

submitBtn.addEventListener(`click`, () => {
  setCookie(`firstName`, firstText.value, 365);
  setCookie(`lastName`, lastText.value, 365);
});

cookieBtn.addEventListener(`click`, () => {
  firstText.value = getCookie(`firstName`);
  lastText.value = getCookie(`lastName`);
});
