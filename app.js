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