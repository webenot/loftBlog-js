let myLink = document.getElementById('myLink');

let handler = function (e) {
	console.log(e);
	//e.stopPropagation();
	//e.stopImmediatePropagation();
	//e.cancelBubble = true;
	e.preventDefault();
	//alert(e.type);
};
let handler2 = (e) => alert('второй обработчик');

//myLink.addEventListener('click', handler);
myLink.addEventListener('click', handler, true);
//myLink.addEventListener('click', handler2);
//myLink.removeEventListener('click', handler);

let container = document.querySelector('#container');
let cb1 = (e) => alert('Первый обработчик');

let offsetX = 0, offsetY = 0;
let activeElement;

let mDown = e => {
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
let mUp = e => {
	console.log('Отпустили кнопку мыши', e);
	activeElement = null;
};
let mMove = e => {
	//console.log('Двигаем курсор', e);
	if (activeElement) {
		activeElement.style.top = (e.clientY - offsetY) + 'px';
		activeElement.style.left = (e.clientX - offsetX) + 'px';
	}
};

//container.addEventListener('click', cb1);
container.addEventListener('mousedown', mDown);
container.addEventListener('mouseup', mUp);
document.addEventListener('mousemove', mMove);