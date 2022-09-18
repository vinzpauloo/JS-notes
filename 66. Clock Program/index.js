const Clock = document.getElementById(`myClock`);
setInterval(update, 1000);

function update() {
  let date = new Date();
  Clock.innerHTML = formatTime(date);

  function formatTime() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let year = date.getFullYear();
    let amOrPm = hours >= 12 ? `PM` : `AM`;

    hours = hours % 12 || 12;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${
      monthNames[d.getMonth()]
    } ${day}, ${year} at ${hours}:${minutes}:${seconds} ${amOrPm}`;
  }

  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? `0` + time : time;
  }
}
const d = new Date();
const monthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

console.log(d);
