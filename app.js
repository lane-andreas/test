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
const navB = document.querySelector("nav");
navB.style.translate = "100vw";
function navMenu() {
  if (navB.style.translate == "100vw") {
    menuB.setAttribute("icon", "line-md:menu-to-close-alt-transition");
    navB.style.translate = "0";
  } else {
    menuB.setAttribute("icon", "line-md:close-to-menu-alt-transition");
    navB.style.translate = "100vw";
  }
}
