document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Slideshow logic after header is injected
      const images = [
        "images/MSQ-Christimas-25-12-02-Work.jpg",
        "images/ManasotaSaxQuartetGroupPic-24-10-01.jpg"
      ];
      const interval = 10000;
      let index = 0;
      const slideshow = document.getElementById("slideshow");

      setInterval(() => {
        slideshow.style.opacity = 0;
        setTimeout(() => {
          index = (index + 1) % images.length;
          slideshow.src = images[index];
          slideshow.style.opacity = 1;
        }, 1000);
      }, interval);
    });
});

