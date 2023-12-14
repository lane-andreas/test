document.addEventListener("DOMContentLoaded", function () {
  const follower = document.getElementById("follower");

  document.addEventListener("mousemove", function (e) {
    if (window.innerWidth >= 800) {
      const x = e.clientX / 3 - window.innerWidth;
      const y = e.clientY / 3 + window.innerHeight / 1.5;

      follower.style.translate = `${x}px ${y}px`;
    }
  });
});

const navLinks = document.querySelectorAll(".nav-link");
const transition = document.querySelector(".transition");

navLinks.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    transition.style.animation = "slide-out 1s";

    setTimeout(function () {
      window.location.href = button.getAttribute("href");
    }, 900);
  });
});

const menuB = document.querySelector("#menu");
const closeB = document.querySelector("#close");
const navB = document.querySelector("nav");

menuB.addEventListener("click", function () {
  menuB.style.right = "-1em";
  navB.style.translate = "0";
  closeB.style.left = "1em";
});

closeB.addEventListener("click", function () {
  menuB.style.right = "1em";
  navB.style.translate = "100vw";
  closeB.style.left = "-1em";
});
