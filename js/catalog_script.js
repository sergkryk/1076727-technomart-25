var buyLink = document.querySelectorAll(".buy-link");
var buyPopup = document.querySelector(".cart-added");
var buyClose = buyPopup.querySelector(".btn-close");
var proceed = buyPopup.querySelector(".continue-btn");

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
