/* Фильтр на мобильный устроствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
sidebarToggleBtn.onclick = function () {
	menuIcon.classList.toggle('menu-icon-active');
	sidebar.classList.toggle('sidebar--mobile-active');
};
// Кнопка, котрая скрывает карточки
const btnShoreMoreCards = document.querySelector('.show_more');
const openShoreMore = document.querySelectorAll('.hidden-cards');


btnShoreMoreCards.addEventListener("click", function () {
	openShoreMore.forEach(function (card) {
		card.classList.remove('hidden-cards');
	})

});

// Кнопка, которая скрывает виджеты
const vidgetAll = document.querySelectorAll('.vidget');

vidgetAll.forEach(function (vidget) {
	vidget.addEventListener('click', function (e) {
		if (e.target.classList.contains('vidget-title')) {
			e.target.classList.toggle('vidget-title--active');
			e.target.nextElementSibling.classList.toggle('vidget-body');
		}
	});
});

// Кнопка, которая работает с "Любое"

const checkBoxAny = document.querySelector('#location_05');
const topCheckboxes = document.querySelectorAll('.location-activ');


checkBoxAny.addEventListener('change', function () {
	if (checkBoxAny.checked) {
		topCheckboxes.forEach(function (item) {
			item.checked = false;
		});
	}
})


topCheckboxes.forEach(function (item) {
	item.addEventListener('change', function () {
		if (checkBoxAny.checked) {
			checkBoxAny.checked = false;
		}
	})
})

const checkboxShowMore = document.querySelector('.btn-shore_more');
const hidenCheckbox = document.querySelectorAll('.checkbox-hiden');


checkboxShowMore.onclick = function (e) {

	e.preventDefault();

	// показываем
	if (checkboxShowMore.dataset.options == 'hidden') {
		hidenCheckbox.forEach(function (item) {
			item.style.display = 'block';
		});
		checkboxShowMore.innerText = 'Скрыть дополнительные опции';
		checkboxShowMore.dataset.options = 'visible';
	}
	//  скрываем
	else if (checkboxShowMore.dataset.options == 'visible') {
		hidenCheckbox.forEach(function (item) {
			item.style.display = 'none';
		});
		checkboxShowMore.innerText = 'Показать ещё';
		checkboxShowMore.dataset.options = 'hidden';
	}

}