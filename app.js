const click = document.querySelector(".section-btn a");
const textfield = document.querySelector(".section-textfield");
const close = document.querySelector(".close span");
const sectionInfo = document.querySelector(".section-info");

click.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(click.classList.add("desactive"));
  sectionInfo.classList.add("desactive");
  textfield.classList.add("active");
});
close.addEventListener("click", (e) => {
  textfield.classList.remove("active");
  console.log(click.classList.remove("desactive"));
  sectionInfo.classList.remove("desactive");
  sectionInfo.classList.add("active");
});
