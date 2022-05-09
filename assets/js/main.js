const header = document.querySelector("header");

let latestScroll = 0;
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll > latestScroll && window.scrollY > 100) {
    header.style.transform = "translateY(-200px)";
    header.style.transition = "0.3s all";
  } else {
    header.style.transform = "translateY(0px)";
    header.style.transition = "0.3s all";
  }
  latestScroll = scroll;
});
