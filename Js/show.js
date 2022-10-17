

const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.time__item').length;
let items = 4;

showMore.addEventListener('click', () => {
    showMore.remove();
	items += 100;
	const array = Array.from(document.querySelector('.time').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});