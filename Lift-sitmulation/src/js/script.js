const openliftbtn = document.querySelector(".open-lift");
const leftdoor = document.querySelector(".left-door");
const rightdoor = document.querySelector(".right-door");

const openlift = () => {
  openliftbtn.disabled = true;
  leftdoor.classList.add("left-door-open");
  rightdoor.classList.add("right-door-open");

  leftdoor.classList.remove("left-door-close");
  rightdoor.classList.remove("right-door-close");
};
const closelift = () => {
  leftdoor.classList.add("left-door-close");
  rightdoor.classList.add("right-door-close");
  leftdoor.classList.remove("left-door-open");
  rightdoor.classList.remove("right-door-open");

  openliftbtn.disabled = false;
};

const openCloseLift = () => {
  openlift();
  setTimeout(() => {
    closelift();
  }, 3000);
};

openliftbtn.addEventListener("click", () => {
  openCloseLift();
});
