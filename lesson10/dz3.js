'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createBlock = function createBlock() {
	var c = document.querySelector('.right-block');
	var r = Math.floor(Math.random() * 256),
	    g = Math.floor(Math.random() * 256),
	    b = Math.floor(Math.random() * 256),
	    width = Math.floor(Math.random() * (c.clientWidth / 2)),
	    height = Math.floor(Math.random() * (c.clientHeight / 2)),
	    x = Math.floor(Math.random() * (c.clientWidth - width)),
	    y = Math.floor(Math.random() * (c.clientHeight - height));

	paintDiv('rgb(' + r + ',' + g + ',' + b + ')', width + 'px', height + 'px', x + 'px', y + 'px');
};

var paintDiv = function paintDiv(color, width, height, x, y) {
	var c = document.querySelector('.right-block');
	c.innerHTML = '';
	var newDiv = document.createElement('div');
	newDiv.classList.add('draggable');
	newDiv.style.position = 'absolute';
	newDiv.style.backgroundColor = color;
	newDiv.style.width = width;
	newDiv.style.height = height;
	newDiv.style.top = y;
	newDiv.style.left = x;
	newDiv.addEventListener('mouseover', function (e) {
		e.target.style.cursor = 'move';
	});
	newDiv.addEventListener('mouseout', function (e) {
		e.target.style.cursor = 'default';
	});
	c.appendChild(newDiv);
};

var btn = document.querySelector('#createBlock');
btn.addEventListener('click', createBlock);

var container = document.querySelector('.right-block');
var cont = container.getBoundingClientRect();
var movableElement = void 0,
    shiftX = 0,
    shiftY = 0;

var getDiv = function getDiv(e) {
	if (e.which != 1) {
		// если клик правой кнопкой мыши
		return; // то он не запускает перенос
	}
	movableElement = e.target.closest('.draggable');

	if (!movableElement) return;
	var box = movableElement.getBoundingClientRect();

	shiftX = e.clientX - box.left;
	shiftY = e.clientY - box.top;
};
var leaveDiv = function leaveDiv(e) {
	movableElement = null;
};
var moveDiv = function moveDiv(e) {
	if (movableElement) {
		movableElement.style.top = e.clientY - shiftY + 'px';
		movableElement.style.left = e.clientX - shiftX + 'px';

		if (e.clientY - shiftY < cont.top) {
			movableElement.style.top = '0';
		} else {
			if (e.clientY - shiftY > cont.top + cont.height - movableElement.clientHeight) {
				movableElement.style.top = parseInt(cont.height) - movableElement.clientHeight + 'px';
			} else {
				movableElement.style.top = e.clientY - shiftY - cont.top + 'px';
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

var save = document.getElementById('saveState');

save.addEventListener('click', function (e) {
	var el = document.querySelector('.draggable');
	if (el) {
		var date = new Date();
		date.setFullYear(date.getFullYear() + 1);
		document.cookie = 'rect=' + (0, _stringify2.default)({ bgc: el.style.backgroundColor, top: el.style.top, left: el.style.left, width: el.style.width, height: el.style.height }) + '; expires=' + date.toUTCString();
	}
});

window.addEventListener('load', function () {
	var params = document.cookie;
	params = params.split('; ');
	var rect = '';
	params.forEach(function (item, index, arr) {
		var cookie = item.split('=');
		if (cookie[0] == 'rect') {
			rect = cookie;
		}
	});
	if (rect) {
		params = JSON.parse(rect[1]);
		paintDiv(params.bgc, params.width, params.height, params.left, params.top);
	}
});

//# sourceMappingURL=dz3.js.map