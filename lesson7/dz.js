'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accordeon = document.querySelector('#accordeon');

var openAccordeon = function openAccordeon(e) {
	if (e.target.lastElementChild !== null) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(e.target.parentNode.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				if (item.lastElementChild.className != 'hidden' && item != e.target) item.lastElementChild.classList.toggle('hidden');
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		e.target.lastElementChild.classList.toggle('hidden');
	}
};

accordeon.addEventListener('click', openAccordeon);

var createBlock = function createBlock() {
	var c = document.querySelector('.right-block');
	c.innerHTML = '';
	var newDiv = document.createElement('div');
	var r = Math.floor(Math.random() * 256),
	    g = Math.floor(Math.random() * 256),
	    b = Math.floor(Math.random() * 256),
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
	console.log('Нажали кнопку мыши', e);
	if (e.which != 1) {
		// если клик правой кнопкой мыши
		return; // то он не запускает перенос
	}
	movableElement = e.target.closest('.draggable');

	if (!movableElement) return;
	var box = movableElement.getBoundingClientRect();

	shiftX = e.clientX - box.left;
	shiftY = e.clientY - box.top;
	console.log(shiftX, shiftY);
};
var leaveDiv = function leaveDiv(e) {
	console.log('Отпустили кнопку мыши', e);
	/*movableElement.style.top = e.clientY - shiftY - cont.top + 'px';
 movableElement.style.left = e.clientX - shiftX - cont.left + 'px';*/
	movableElement = null;
};
var moveDiv = function moveDiv(e) {
	if (movableElement) {
		if (e.clientY - shiftY - cont.top < cont.top) {
			movableElement.style.top = '0';
		} else {
			if (e.clientY - shiftY > cont.top + cont.height - movableElement.clientHeight) {
				movableElement.style.top = cont.top + cont.height - movableElement.clientHeight + 'px';
			} else {
				movableElement.style.top = e.clientY - shiftY - cont.top + 'px';
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
		//console.dir(e.currentTarget);
	}
};

container.addEventListener('mousedown', getDiv);
container.addEventListener('mouseup', leaveDiv);
container.addEventListener('mousemove', moveDiv);

//# sourceMappingURL=dz.js.map