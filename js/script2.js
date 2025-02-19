document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Muncul saat scroll turun lebih dari 300px
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});

// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};