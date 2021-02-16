const bar = document.querySelector(".bar");
const nav = document.querySelector("nav");
const cross = document.querySelector(".cross");

// Menu Bar- Shrink and grow animation class toggling
setInterval(() => {
  if (bar.classList.contains("grow")) {
    bar.classList.remove("grow");
    bar.classList.add("shrink");
  } else {
    bar.classList.add("grow");
    bar.classList.remove("shrink");
  }
}, 1000);

// Event listeners
bar.addEventListener("click", () => {
  nav.classList.toggle("show-sidebar");
});

cross.addEventListener("click", () => {
  nav.classList.remove("show-sidebar");
});
