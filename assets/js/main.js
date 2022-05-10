const header = document.querySelector("header");
const categories = document.querySelector(".third-header  #categories");
const btnHamburger = document.querySelector("#btnHamburger");
const btnClose = document.querySelector("#btnClose");

btnHamburger.addEventListener("click", () => {
  categories.classList.add("hamburger-showup");
  categories.style.display = "flex";
  categories.style.transition = "1s all";
  btnClose.classList.remove("hidden");
  btnClose.style.zIndex = "1";
  btnClose.classList.add("close-btn-place");
});

btnClose.addEventListener("click", () => {
  categories.classList.remove("hamburger-showup");
  categories.style.display = "none";
  btnClose.classList.add("hidden");
  btnClose.classList.remove("close-btn-place");
});

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

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 70,
  responsive: {
    0: {
      items: 1.5,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 4.5,
    },
  },
});
