let main = document.querySelector("main");

let audio = new Audio("./music/28.mp3");
let audio2 = new Audio("./music/29.mp3");
let audio3 = new Audio("./music/30.mp3");
let audio4 = new Audio("./music/31.mp3");
let audio5 = new Audio("./music/32.mp3");
let audio6 = new Audio("./music/33.mp3");
let audio7 = new Audio("./music/42.mp3");
let audio8 = new Audio("./music/35.mp3");
let audio9 = new Audio("./music/36.mp3");
let audio10 = new Audio("./music/37.mp3");
let audio11 = new Audio("./music/38.mp3");
let audio12 = new Audio("./music/41.mp3");
let audio13 = new Audio("./music/43.mp3");
let audio14 = new Audio("./music/44.mp3");
let audio15 = new Audio("./music/46.mp3");
let audio16 = new Audio("./music/47.mp3");
let audio17 = new Audio("./music/48.mp3");
let audio18 = new Audio("./music/49.mp3");
let audio19 = new Audio("./music/50.mp3");
let audio20 = new Audio("./music/51.mp3");
let audio21 = new Audio("./music/52.mp3");

document.addEventListener("keydown", (dets) => {
  if (dets.code == "KeyA") {
    audio.currentTime = 0;
    audio.play();
  } else if (dets.code == "KeyB") {
    audio2.currentTime = 0;
    audio2.play();
  } else if (dets.code == "KeyC") {
    audio3.currentTime = 0;
    audio3.play();
  } else if (dets.code == "KeyD") {
    audio4.currentTime = 0;
    audio4.play();
  } else if (dets.code == "KeyE") {
    audio5.currentTime = 0;
    audio5.play();
  } else if (dets.code == "KeyF") {
    audio6.currentTime = 0;
    audio6.play();
  } else if (dets.code == "KeyG") {
    audio7.currentTime = 0;
    audio7.play();
  } else if (dets.code == "KeyH") {
    audio8.currentTime = 0;
    audio8.play();
  } else if (dets.code == "KeyI") {
    audio9.currentTime = 0;
    audio9.play();
  } else if (dets.code == "KeyJ") {
    audio10.currentTime = 0;
    audio10.play();
  } else if (dets.code == "KeyK") {
    audio11.currentTime = 0;
    audio11.play();
  } else if (dets.code == "KeyL") {
    audio12.currentTime = 0;
    audio12.play();
  } else if (dets.code == "KeyM") {
    audio13.currentTime = 0;
    audio13.play();
  } else if (dets.code == "KeyN") {
    audio14.currentTime = 0;
    audio14.play();
  } else if (dets.code == "KeyO") {
    audio15.currentTime = 0;
    audio15.play();
  } else if (dets.code == "KeyP") {
    audio16.currentTime = 0;
    audio16.play();
  } else if (dets.code == "KeyQ") {
    audio17.currentTime = 0;
    audio17.play();
  } else if (dets.code == "KeyR") {
    audio18.currentTime = 0;
    audio18.play();
  } else if (dets.code == "KeyS") {
    audio19.currentTime = 0;
    audio19.play();
  } else if (dets.code == "KeyT") {
    audio20.currentTime = 0;
    audio20.play();
  } else if (dets.code == "KeyU") {
    audio21.currentTime = 0;
    audio21.play();
  }
});

function press(key) {
  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 120);
}

document.addEventListener("keydown", (e) => {
  const className = e.code.replace("Key", "").toLowerCase();
  const key = document.querySelector(`.${className}`);
  if (!key) return;

  press(key);
});

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    press(key);
  });
});

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    const cls = key.classList[2];
    document.dispatchEvent(
      new KeyboardEvent("keydown", { code: "Key" + cls.toUpperCase() }),
    );
  });
});
