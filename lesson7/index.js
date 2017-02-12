'use strict';

var myLink = document.getElementById('myLink');

var handler = function handler(e) {
	console.log(e);
	//e.stopPropagation();
	//e.stopImmediatePropagation();
	//e.cancelBubble = true;
	e.preventDefault();
	//alert(e.type);
};
var handler2 = function handler2(e) {
	return alert('второй обработчик');
};

//myLink.addEventListener('click', handler);
myLink.addEventListener('click', handler, true);
//myLink.addEventListener('click', handler2);
//myLink.removeEventListener('click', handler);

var container = document.querySelector('#container');
var cb1 = function cb1(e) {
	return alert('Первый обработчик');
};

var offsetX = 0,
    offsetY = 0;
var activeElement = void 0;

var mDown = function mDown(e) {
	console.log('Нажали кнопку мыши', e);
	activeElement = e.target;
	if (e.hasOwnProperty('offsetX')) {
		offsetX = e.offsetX;
	} else {
		offsetX = e.pageX;
	}
	if (e.hasOwnProperty('offsetY')) {
		offsetY = e.offsetY;
	} else {
		offsetY = e.pageY;
	}
};
var mUp = function mUp(e) {
	console.log('Отпустили кнопку мыши', e);
	activeElement = null;
};
var mMove = function mMove(e) {
	//console.log('Двигаем курсор', e);
	if (activeElement) {
		activeElement.style.top = e.clientY - offsetY + 'px';
		activeElement.style.left = e.clientX - offsetX + 'px';
	}
};

//container.addEventListener('click', cb1);
container.addEventListener('mousedown', mDown);
container.addEventListener('mouseup', mUp);
document.addEventListener('mousemove', mMove);

//# sourceMappingURL=index.js.map