'use strict';

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

function sendAjax(url, method, data) {
	return new _promise2.default(function (resolve, reject) {
		var xhr = getXmlHttpRequest();
		xhr.open(method, url);
		xhr.addEventListener('load', function () {
			resolve(xhr.responseText);
		});
		xhr.addEventListener('error', function () {
			reject();
		});
		xhr.send(data);
	});
}

var myButton = document.querySelector('#sendAjax');

myButton.addEventListener('click', function () {
	sendAjax('text.txt', 'GET', null).then(function (response) {
		console.log('Файл загружен', response);
		container.innerText = response;
		return response;
	}).then(function (res) {
		console.log('Получен ответ от сервера', res);
	});
});

//# sourceMappingURL=index5.js.map