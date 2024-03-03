//Beef function
const beef_sprite = document.querySelector(".beef");

var mouseX = 0;
var mouseY = 0;

var beefX = 0;
var beefY = 0;
var dx = 0;
var dy = 0;
const speed = 0.005; // Adjust the speed as needed
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
if (beef_sprite) {
  setInterval(() => {
    beef_sprite.style.left = beefX + dx + "px";
    beef_sprite.style.top = beefY + dy + "px";
    dx = (mouseX - beefX) * speed;
    dy = (mouseY - beefY) * speed;

    beefX = beef_sprite.offsetLeft;
    beefY = beef_sprite.offsetTop;

    if (dx > 0) {
      beef_sprite.style.transform = "scaleX(-1)";
    } else {
      beef_sprite.style.transform = null;
    }

    // console.log("moving");
    // console.log("beefx = ", beefX);
    // console.log("adding...", dx);

    //If dx or dy < 0.3, change to play sprite
    //if above, change to walk sprite
  }, 30);
}
// End Beef

// Darkmode function
darkmode_button = document.querySelector("#darkmode");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkModePref")) {
    console.log("dmp in ls");
    if (localStorage.getItem("darkModePref") === "dark") {
      element = document.body;
      element.classList.add("darkmode");
      console.log("added darkmode");
    } else {
      element = document.body;
      element.classList.remove("darkmode");
    }
    console.log(localStorage.getItem("darkModePref"));
  } else {
    localStorage.setItem("darkModePref", "light");
    console.log("Pref addeed");
  }
});

darkmode_button.addEventListener("click", () => {
  console.log("Darkmode button press");
  element = document.body;
  element.classList.toggle("darkmode");
  if (element.classList.contains("darkmode")) {
    localStorage.setItem("darkModePref", "dark");
  } else {
    localStorage.setItem("darkModePref", "light");
  }
  console.log("Pref set:", localStorage.getItem("darkModePref"));
  console.log(element.classList);
});

// End Darkmode

//Fade in sequence
