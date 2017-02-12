let list = document.getElementById('list');
/*
for (let item of list.children) {
	item.addEventListener('click', e => console.log(`Кликнули на ${e.target.attributes['my-attr'].value}`));
}*/
list.addEventListener('click', e => console.log(`Кликнули на ${e.target.getAttribute('my-attr')}`, e.target));