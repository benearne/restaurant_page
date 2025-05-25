import { setHome } from "./home";
import { setAbout } from "./about";
import { setMenu } from "./menu";

import "./style.css";

setHome();

const homeBttn = document.getElementById("home");
const aboutBttn = document.getElementById("about");
const menuBttn = document.getElementById("menu");

homeBttn.addEventListener("click", () => setHome());
aboutBttn.addEventListener("click", () => setAbout());
menuBttn.addEventListener("click", () => setMenu());