'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var xhr = getXmlHttpRequest();

xhr.open('POST', 'http://localhost:7777', true);
xhr.responseType = 'json';
xhr.onloadend = function () {
	console.log(xhr.response);
};

xhr.send((0, _stringify2.default)({ q: 1, w: 'data' }));

//# sourceMappingURL=index7.js.map