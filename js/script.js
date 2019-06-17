var buyLink = document.querySelectorAll(".buy-link");
var buyPopup = document.querySelector(".cart-added");
var buyClose = buyPopup.querySelector(".btn-close");
var proceed = buyPopup.querySelector(".continue-btn");

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

var options = document.querySelectorAll(".services-list-item");
var cards = document.querySelectorAll(".services-items-description");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    console.log("login or email required");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
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

options.forEach(function (el, index) {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    cards.forEach(function (el, index) {
      cards[index].classList.add("visually-hidden");
      options[index].classList.remove("active");
    })
    cards[index].classList.remove("visually-hidden");
    options[index].classList.add("active");
  })
});

buyLink.forEach(function (el, index) {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  })
});

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

proceed.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});
