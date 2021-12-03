//
// nav
//

const nav_menu = document.querySelector("#nav .nav_menu");
const toggle_btn = document.querySelector("#toggle_btn");
const toggle_icon = document.querySelector("#toggle_icon");

function toggleMenu() {
    nav_menu.classList.toggle("nav_menu_close");
    toggle_icon.classList.toggle("fa-toggle-on");
    toggle_icon.classList.toggle("fa-toggle-off");
}

toggle_btn.addEventListener('click', toggleMenu, false);

