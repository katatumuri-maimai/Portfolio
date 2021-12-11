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


// navをスクロール量によって隠す
const nav = document.querySelector("#nav");

let start_pos = 0;
let scroll_amount;

function changeNavOpacity() {
    const current_pos = window.pageYOffset || document.documentElement.scrollTop;
    scroll_amount = current_pos - start_pos;
    start_pos = current_pos;

    if (scroll_amount > 0) {
        nav.classList.add("nav_close")
    } else {
        nav.classList.remove("nav_close")
    }
}


//
// creative
//

const section_list = document.querySelectorAll(".fadein");

// 要素の絶対位置を返す関数
function calcTopPosition(element) {
    return element.getBoundingClientRect().top + window.pageYOffset;
}

function fadeinElements(){
    const scrollPosition = window.pageYOffset + window.innerHeight;

    section_list.forEach(element => {
        const top = calcTopPosition(element);
        if (top < scrollPosition) {
            element.classList.add('scrollin');
        };
    });
}


// スクロール時に実行する

window.onscroll = function () {
    changeNavOpacity();
    fadeinElements();
}