// console.log(navigator.cookieEnabled);

// document.cookie =
//   "firstName = Patrick; expires=Sun,1 January 2030 12:00:00 UTC; path=/";

// document.cookie =
//   "lastName = Star; expires=Sun,1 January 2000 12:00:00 UTC; path=/";

// console.log(document.cookie);

// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");

// setCookie("firstName", "Spongebob", 365);
// setCookie("lastName", "Squarepants", 365);

// console.log(getCookie("firstName"));

function setCookie(name, value, daysToLive) {
  const date = new Date();
  /* Setting the date to the current date plus the number of days to live. */
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}
