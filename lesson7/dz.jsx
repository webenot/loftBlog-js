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

let createBlock = () => {
	let c = document.querySelector('.right-block');
	c.innerHTML = '';
	let newDiv = document.createElement('div');
	let r = Math.floor(Math.random() * (256)),
		g = Math.floor(Math.random() * (256)),
		b = Math.floor(Math.random() * (256)),
		width = Math.floor(Math.random() * (c.clientWidth / 2)),
		height = Math.floor(Math.random() * (c.clientHeight / 2)),
		x = Math.floor(Math.random() * (c.clientWidth - width)),
		y = Math.floor(Math.random() * (c.clientHeight - height));

	newDiv.classList.add('draggable');
	newDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	newDiv.style.position = 'absolute';
	newDiv.style.width = width + 'px';
	newDiv.style.height = height + 'px';
	newDiv.style.top = y + 'px';
	newDiv.style.left = x + 'px';
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
	console.log(shiftX, shiftY);
};
let leaveDiv = (e) => {
	movableElement = null;
};
let moveDiv = (e) => {
	if (movableElement) {
		if (e.clientY - shiftY  - cont.top < cont.top) {
			movableElement.style.top = '0';
		} else {
			if (e.clientY - shiftY > cont.top + cont.height - movableElement.clientHeight) {
				movableElement.style.top = cont.top + cont.height - movableElement.clientHeight + 'px';
			} else {
				movableElement.style.top = e.clientY - shiftY  - cont.top + 'px';
			}
		}
		if (e.clientX - shiftX < cont.left) {
			movableElement.style.left = '0';
		} else {
			if (e.clientX - shiftX > cont.left + cont.width - movableElement.clientWidth) {
				console.log(cont.left + cont.width - movableElement.clientWidth);
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
