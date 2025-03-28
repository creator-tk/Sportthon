const search_bar = document.getElementById('search');
const right_header = document.getElementsByClassName("right_header")[0];
const right_section = document.getElementsByClassName("hero_landing")[0];

const left_hero = document.getElementsByClassName("hero_container")[0]


search_bar.onclick = () => {
  if (right_header && right_section) {
    right_header.classList.add("change_background");
    right_section.style.display = "none";
  }
  if (left_hero) {
    left_hero.classList.add("full_screen");
  }
};