var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".support-modal");
var close = popup.querySelector(".btn-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector(".feedback-form");
var map = document.querySelector(".map-popup");
var mappopup = document.querySelector(".map-pop-up");
var closemap = mappopup.querySelector(".btn-close");
var sliders = document.querySelectorAll(".slider");
var arrows = document.querySelectorAll(".slider-btn");
var toggles = document.querySelectorAll(".slider-indicator");

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();

  }
  evt.preventDefault();
  console.log(login.value);
  console.log(email.value);
  console.log("submitting");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  console.log("btn is pressed");
  console.log("login is focused");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  console.log("modal is closed");
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

toggles.forEach(function (el, index) {
  el.addEventListener("click", function () {
    sliders.forEach(function (el, index) {
      if (sliders[index].classList.contains("slider-current")) {
        sliders[index].classList.remove("slider-current");
        toggles[index].classList.remove("indicator-current");
      }
    })

    sliders[index].classList.add("slider-current");
    toggles[index].classList.add("indicator-current");
  })

  arrows.forEach(function (el, index) {
    el.addEventListener("click", function () {
      sliders.forEach(function (el, index) {
        if (sliders[index].classList.contains("slider-current")) {
          sliders[index].classList.remove("slider-current");
          toggles[index].classList.remove("indicator-current");
        }
      })
      sliders[index].classList.add("slider-current");
      toggles[index].classList.add("indicator-current");
    })
  })
});

