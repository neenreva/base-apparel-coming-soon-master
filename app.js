const inputVal = document.querySelector(".email-input");
const emailError = document.querySelector(".error");
const heroImg = document.querySelector(".hero-img");

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailError.classList.contains("hidden")) {
    emailError.classList.add("hidden");
  }
  if (!inputVal.value.includes("@")) {
    emailError.classList.toggle("hidden");
  }
});

window.innerWidth > 1000
  ? (heroImg.src = "images/hero-desktop.jpg")
  : (heroImg.src = "images/hero-mobile.jpg");

addEventListener("resize", () => {
  window.innerWidth > 1000
    ? (heroImg.src = "images/hero-desktop.jpg")
    : (heroImg.src = "images/hero-mobile.jpg");
  console.log(heroImg.src);
});
