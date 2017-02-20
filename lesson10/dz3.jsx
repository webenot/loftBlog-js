let createBlock = () => {
	let c = document.querySelector('.right-block');
	let r = Math.floor(Math.random() * (256)),
		g = Math.floor(Math.random() * (256)),
		b = Math.floor(Math.random() * (256)),
		width = Math.floor(Math.random() * (c.clientWidth / 2)),
		height = Math.floor(Math.random() * (c.clientHeight / 2)),
		x = Math.floor(Math.random() * (c.clientWidth - width)),
		y = Math.floor(Math.random() * (c.clientHeight - height));

	paintDiv('rgb(' + r + ',' + g + ',' + b + ')', width + 'px', height + 'px', x + 'px', y + 'px');

};

let paintDiv = (color, width, height, x, y) => {
	let c = document.querySelector('.right-block');
	c.innerHTML = '';
	let newDiv = document.createElement('div');
	newDiv.classList.add('draggable');
	newDiv.style.position = 'absolute';
	newDiv.style.backgroundColor = color;
	newDiv.style.width = width;
	newDiv.style.height = height;
	newDiv.style.top = y ;
	newDiv.style.left = x;
	newDiv.addEventListener('mouseover', (e) => {
		e.target.style.cursor = 'move';
	});
	newDiv.addEventListener('mouseout', (e) => {
		e.target.style.cursor = 'default';
	});
	c.appendChild(newDiv);
};

let btn = document.querySelector('#createBlock');
btn.addEventListener('click', createBlock);

let container = document.querySelector('.right-block');
let cont = container.getBoundingClientRect();
let movableElement, shiftX = 0, shiftY = 0;

let getDiv = (e) => {
	if (e.which != 1) { // если клик правой кнопкой мыши
		return; // то он не запускает перенос
	}
	movableElement = e.target.closest('.draggable');

	if (!movableElement) return;
	let box = movableElement.getBoundingClientRect();

	shiftX = e.clientX - box.left;
	shiftY = e.clientY - box.top;
};
let leaveDiv = (e) => {
	movableElement = null;
};
let moveDiv = (e) => {
	if (movableElement) {
		movableElement.style.top = e.clientY - shiftY + 'px';
		movableElement.style.left = e.clientX - shiftX + 'px';

		if (e.clientY - shiftY < cont.top) {
			movableElement.style.top = '0';
		} else {
			if (e.clientY - shiftY > cont.top + cont.height - movableElement.clientHeight) {
				movableElement.style.top = parseInt(cont.height) - movableElement.clientHeight + 'px';
			} else {
				movableElement.style.top = e.clientY - shiftY  - cont.top + 'px';
			}
		}
		if (e.clientX - shiftX < cont.left) {
			movableElement.style.left = '0';
		} else {
			if (e.clientX - shiftX > cont.left + cont.width - movableElement.clientWidth) {
				movableElement.style.left = cont.width - movableElement.clientWidth + 'px';
			} else {
				movableElement.style.left = e.clientX - shiftX - cont.left + 'px';
			}
		}
	}
};

container.addEventListener('mousedown', getDiv);
container.addEventListener('mouseup', leaveDiv);
container.addEventListener('mousemove', moveDiv);

let save = document.getElementById('saveState');

save.addEventListener('click', (e) => {
	let el = document.querySelector('.draggable');
	if (el) {
		let date = new Date();
		date.setFullYear(date.getFullYear() + 1);
		document.cookie = 'rect=' + JSON.stringify({bgc: el.style.backgroundColor, top: el.style.top, left: el.style.left, width: el.style.width, height: el.style.height}) + '; expires=' + date.toUTCString();
	}
});

window.addEventListener('load', () => {
	let params = document.cookie;
	params = params.split('; ');
	let rect = '';
	params.forEach((item, index, arr) => {
		let cookie = item.split('=');
		if (cookie[0] == 'rect') {
			rect = cookie;
		}
	});
	if(rect) {
		params = JSON.parse(rect[1]);
		paintDiv(params.bgc, params.width, params.height, params.left, params.top);
	}
});