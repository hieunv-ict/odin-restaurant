import './style.css'
import loadMainContent from "./content.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js"
console.log("Hello odinite");
loadMainContent();

// add event lsitener to navigation buttons
let homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", loadMainContent);
let menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", loadMenu);
let contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", loadContact);