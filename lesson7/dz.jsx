let accordeon = document.querySelector('#accordeon');

let openAccordeon = (e) => {
	if (e.target.lastElementChild !== null) {
		for (let item of e.target.parentNode.children) {
			if (item.lastElementChild.className != 'hidden' && item != e.target)
				item.lastElementChild.classList.toggle('hidden');
		}
		e.target.lastElementChild.classList.toggle('hidden');
	}
};

accordeon.addEventListener('click', openAccordeon);