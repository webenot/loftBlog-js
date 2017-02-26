'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function sendAjax(url, method, responseType, data, async, user, pass) {
	return new _promise2.default(function (resolve, reject) {
		method = method || 'GET';
		responseType = responseType || 'text';
		async = async || true;
		user = user || null;
		pass = pass || null;

		var xhr = getXmlHttpRequest();
		xhr.open(method, url, async, user, pass);
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

module.exports = sendAjax;

//# sourceMappingURL=ajax.js.map