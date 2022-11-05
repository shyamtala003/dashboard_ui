let navCloseBtn = document.getElementById('close_navbar_btn');
let navOpenBtn = document.querySelector('.menu_btn');
let navbar = document.getElementById('sidebar');

navOpenBtn.addEventListener("click", () => {
    navbar.classList.add("open_sidebar")
})

navCloseBtn.addEventListener("click", () => {
    navbar.classList.remove("open_sidebar");
})