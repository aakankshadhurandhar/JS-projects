var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var click_btn = document.getElementsByClassName("btn-click")[0];
var text_display = document.getElementsByClassName("text-display")[0];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
click_btn.onclick = function () {
  modal.style.display = "none";
  text_display.innerHTML = "hi";
};

span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
