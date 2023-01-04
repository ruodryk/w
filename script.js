let btnClose = document.querySelector(".close");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav__list");
let overlay = document.querySelector(".overlay");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
  overlay.classList.toggle("none");
  menu.classList.toggle("none");
  btnClose.classList.toggle("block");
});

btnClose.addEventListener("click", function () {
  nav.classList.toggle("active");
  overlay.classList.toggle("none");
  menu.classList.toggle("none");
  btnClose.classList.toggle("block");
});
