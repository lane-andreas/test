document.addEventListener("DOMContentLoaded", function () {
  const follower = document.getElementById("follower");

  document.addEventListener("mousemove", function (e) {
    // Add a slight delay (e.g., 0.1 seconds) using setTimeout

    const x = e.clientX / 3 + window.innerWidth / 1.8;
    const y = e.clientY / 3 + window.innerHeight / 1.8;

    // Set the position of the follower element
    follower.style.transform = `translate(${x}px, ${y}px)`;
  });
});
