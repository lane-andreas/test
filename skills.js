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
    event.preventDefault();

    transition.style.animation = "slide-out 1s forwards";

    setTimeout(function () {
      window.location.href = button.getAttribute("href");
    }, 1000);
  });
});

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

  mainC1.style.clipPath = `polygon(${
    120 - scrollPercentage * 1.25
  }% -50%,  -50% -50%, -50% 150%, ${120 - scrollPercentage * 1.25}% 150%)`;

  mainC2.style.clipPath = `polygon(100% -50%, ${
    120 - scrollPercentage * 1.25
  }% -50%, ${120 - scrollPercentage * 1.25}% 150%, 100% 150%)`;

  fadeC1.style.left = `${100 - scrollPercentage * 1.25}%`;
  fadeC2.style.left = `${100 - scrollPercentage * 1.25}%`;
});
