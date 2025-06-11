import './app.css'
import App from "./App.svelte"

const app = new App({
  target: document.getElementById("app"),
})

export default app

function loadSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
  }
}