'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ** Функция возвращат объект XMLHttpRequest
 */
function getXmlHttpRequest() {
	if (window.XMLHttpRequest) {
		try {
			return new XMLHttpRequest();
		} catch (e) {}
	} else if (window.ActiveXObject) {
		try {
			return new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {}
		try {
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch (e) {}
	}
	return null;
}

function sendAjax(url, method, data, responseType) {
	return new _promise2.default(function (resolve, reject) {
		var xhr = getXmlHttpRequest();
		xhr.open(method, url);
		xhr.responseType = responseType;
		xhr.addEventListener('load', function () {
			resolve(xhr.response);
		});
		xhr.addEventListener('error', function () {
			reject();
		});
		xhr.send(data);
	});
}

var myButton = document.querySelector('#sendAjax');

myButton.addEventListener('click', function () {
	sendAjax('list.json', 'GET', null, 'json').then(function (response) {
		//let result = JSON.parse(response);
		console.log('Файл загружен', response);
		//container.innerText = response;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(response), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				name = _step.value.name;

				var div = document.createElement('div');
				div.innerText = name;
				container.appendChild(div);
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

		return response;
	}).then(function (res) {
		console.log('Получен ответ от сервера');
	});
});

//# sourceMappingURL=index6.js.map