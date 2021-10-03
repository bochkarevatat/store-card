/* Фильтр на мобильный устроствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
sidebarToggleBtn.onclick = function () {
	menuIcon.classList.toggle('menu-icon-active');
	sidebar.classList.toggle('sidebar--mobile-active');
};

const btnShoreMoreCards = document.querySelector('.show_more');
const openShoreMore = document.querySelector('.hidden-cards');


btnShoreMoreCards.addEventListener("click", function (){
    openShoreMore.classList.remove('hidden-cards');
})