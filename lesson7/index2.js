'use strict';

var list = document.getElementById('list');
/*
for (let item of list.children) {
	item.addEventListener('click', e => console.log(`Кликнули на ${e.target.attributes['my-attr'].value}`));
}*/
list.addEventListener('click', function (e) {
	return console.log('\u041A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 ' + e.target.getAttribute('my-attr'), e.target);
});

//# sourceMappingURL=index2.js.map