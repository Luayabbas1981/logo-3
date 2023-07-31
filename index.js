const frame = document.querySelector(".frame");
const body = document.querySelector("body");

let colorsArr = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];
if (window.innerWidth > 767) {
  body.style.backgroundColor = "white";
}
setInterval(() => {
  index = Math.floor(Math.random() * colorsArr.length);
  let color = colorsArr[index];
  if (window.innerWidth < 767) {
    body.style = `--bc:${color}`;
  } else {
    frame.style = `--b:${color}`;
  }
}, 2000);
