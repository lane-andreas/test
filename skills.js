document.addEventListener("DOMContentLoaded", function () {
  const follower = document.getElementById("follower");

  document.addEventListener("mousemove", function (e) {
    if (window.innerWidth >= 800) {
      const x = e.clientX / 3 + window.innerWidth / 2;
      const y = e.clientY / 3 + window.innerHeight / 1.5;

      follower.style.translate = `${x}px ${y}px`;
    }
  });
});

const navLinks = document.querySelectorAll(".nav-link");
const transition = document.querySelector(".transition");

navLinks.forEach(function (button) {
  button.addEventListener("click", function (event) {
    target = button.getAttribute("target");
    if (target == "_blank") {
    } else {
      event.preventDefault();

      transition.style.animation = "slide-out 1s";
      setTimeout(function () {
        window.location.href = button.getAttribute("href");
      }, 900);
    }
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

const mainC1 = document.querySelector("#content1");
const mainC2 = document.querySelector("#content2");
const fadeC1 = document.querySelector("#fade1");
const fadeC2 = document.querySelector("#fade2");

document.addEventListener("scroll", function () {
  // Get the total scrollable height of the page
  const totalScrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Get the current scroll position
  const currentScrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  // Calculate the scroll percentage
  const scrollPercentage =
    (currentScrollPosition / totalScrollableHeight) * 100;

  mainC1.animate(
    {
      clipPath: `polygon(${
        120 - scrollPercentage * 1.25
      }% -50%,  -50% -50%, -50% 150%, ${120 - scrollPercentage * 1.25}% 150%)`,
    },
    { duration: 1000, fill: "forwards" }
  );

  mainC2.animate(
    {
      clipPath: `polygon(100% -50%, ${120 - scrollPercentage * 1.25}% -50%, ${
        120 - scrollPercentage * 1.25
      }% 150%, 100% 150%)`,
    },
    { duration: 1000, fill: "forwards" }
  );

  fadeC1.animate(
    {
      left: `${100 - scrollPercentage * 1.25}%`,
    },
    { duration: 1000, fill: "forwards" }
  );
  fadeC2.animate(
    {
      left: `${100 - scrollPercentage * 1.25}%`,
    },
    { duration: 1000, fill: "forwards" }
  );
});
