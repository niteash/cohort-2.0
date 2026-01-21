var btn = document.querySelector("#btn");
var bd = document.querySelector("body");
var main = document.querySelector("main");

// btn.addEventListener("click", () => {
//   var h1 = document.createElement("h1");
//   var main = document.createElement("main");

//   h1.innerHTML = "Hello";
//   main.appendChild(h1);

//   console.log(main);
// });

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello, Nicky!";

// main.appendChild(h1);
btn.addEventListener("click", () => {
  var div = document.createElement("div");

  var x = Math.random() * 100;
  var y = Math.random() * 100;

  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);
  var r = Math.random() * 360;

  div.style.height = "80px";
  div.style.width = "80px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.position = "absolute";
  div.style.rotate = r + "deg";
  div.style.left = x + "%";
  div.style.top = y + "%";

  div.innerHTML = `${c1},${c2},${c3}`;
  main.appendChild(div);
});
