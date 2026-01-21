let btn = document.querySelector("#box-btn");
let box = document.querySelector("#box");

btn.addEventListener("click", () => {
  let r = parseInt(Math.random() * 256);
  let g = parseInt(Math.random() * 256);
  let b = parseInt(Math.random() * 256);

  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  box.innerHTML = `rgb(${r}, ${g}, ${b})`;
});
