let img = document.getElementById("elon");
let main = document.querySelector("main");

main.addEventListener("mousemove", (dets) => {
  img.style.left = dets.x + "px";
  img.style.top = dets.y + "px";
});
