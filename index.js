// init Lenis scroller
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// typing animation
new Typed(".text", {
  strings: ["", "UX UI designer."],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// open menu
const menuBtn = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelectorAll(".menu-link-overlay a");

const closeOverlay = () => {
  menuOverlay.classList.remove("opened");
  document.body.style.paddingRight = "0";
};

links.forEach((elm) => {
  elm.addEventListener("click", closeOverlay);
});

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.toggle("opened");
});

closeBtn.addEventListener("click", closeOverlay);
