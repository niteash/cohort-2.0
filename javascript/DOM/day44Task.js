var btn = document.querySelector("#btn");
var bd = document.querySelector("body");
var main = document.querySelector("main");

let arr = [
  "Dream big act daily",
  "Discipline builds unstoppable success",
  "Start now learn fast",
  "Consistency creates massive results",
  "Focus today win tomorrow",
  "Progress over perfection always",
  "Small steps big change",
  "Effort compounds into greatness",
  "Believe act become unstoppable",
  "Hard work beats excuses",
];

btn.addEventListener("click", () => {
  var h1 = document.createElement("h1");

  var a = Math.floor(Math.random() * arr.length);

  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var r = Math.random() * 360;

  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);

  h1.innerHTML = arr[a];
  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = r + "deg";
  h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;

  main.appendChild(h1);
});
