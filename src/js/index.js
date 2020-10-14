//copied from Stack overflow - scrolls smoothly to clicked links on page
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var navbar = document.querySelector(".menu__nav");
var ham = document.querySelector(".menu__hamburger");

ham.addEventListener("click", toggleHamburger);

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

var menuLinks = document.querySelectorAll(".menu__nav__link");

function checkToggle(e) {
  var itemClicked = e.target;
  if (itemClicked.classList.contains("menu__nav__link")) {
    toggleHamburger();
  }
}

navbar.addEventListener("click", checkToggle);
