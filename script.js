const pageLoader = document.getElementById("pageLoader");


window.addEventListener("load", function () {

   pageLoader.style.display = "none"; });

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
 if (navLinks.classList.contains("show")) {
  navLinks.classList.remove("show");
      menuBtn.innerHTML = "&#9776;";
      menuBtn.setAttribute("aria-label", "Open menu");

      menuBtn.setAttribute("aria-expanded", "false");
 } else {
   navLinks.classList.add("show");

      menuBtn.innerHTML = "&#10005;";

      menuBtn.setAttribute("aria-label", "Close menu");

      menuBtn.setAttribute("aria-expanded", "true"); }});
const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(function (navItem) {

   navItem.addEventListener("click", function () {
      navLinks.classList.remove("show");

      menuBtn.innerHTML = "&#9776;";

      menuBtn.setAttribute("aria-label", "Open menu");
      menuBtn.setAttribute("aria-expanded", "false"); }); });

document.addEventListener("click", function (event) {

   const clickedInsideNav = event.target.closest("nav");
   if (!clickedInsideNav && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");

      menuBtn.innerHTML = "&#9776;";
       menuBtn.setAttribute("aria-label", "Open menu");
 menuBtn.setAttribute("aria-expanded", "false");

}});

const themeBtn = document.getElementById("themeBtn");

function updateThemeButton() {
   const lightModeIsOn = document.body.classList.contains("light-mode");



   if (lightModeIsOn) {
      themeBtn.innerHTML = "&#9728;";


      themeBtn.setAttribute("aria-label", "Switch to dark theme");
   } else {

      themeBtn.innerHTML = "&#9790;";


      themeBtn.setAttribute("aria-label", "Switch to light theme");
   }
}

document.body.classList.remove("light-mode");
updateThemeButton();

themeBtn.addEventListener("click", function () {

   if (document.body.classList.contains("light-mode")) {

      document.body.classList.remove("light-mode");
   } else {
      document.body.classList.add("light-mode");
   }
   updateThemeButton();
});

const getStartedBtn = document.getElementById("getStartedBtn");


getStartedBtn.addEventListener("click", function () {

   const contactSection = document.getElementById("contact");
   contactSection.scrollIntoView({
      behavior: "smooth"
   });});
const serviceContainer = document.querySelector(".service-container");
const noData = document.getElementById("noData");

if (serviceContainer.children.length === 0) {

   noData.style.display = "block";
}
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

   event.preventDefault();

   const name = document.getElementById("name").value.trim();


   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();

   if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill all the fields.";
      formMessage.style.color = "#ffb3b3";

      return;

   }

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailPattern.test(email)) {

 formMessage.textContent = "Please enter a valid email.";
      formMessage.style.color = "#ffb3b3";
      return;
   }

   formMessage.textContent = "Thank you. Your message has been received.";
   formMessage.style.color = "#ffbd36";

   contactForm.reset();
});