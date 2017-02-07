'use strict';

var _arguments = arguments;
var forEach = function forEach(source, fn) {
	if (_arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof _arguments[i] !== 'undefined') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции forEach не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции forEach должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции forEach должен быть функцией');
	}
	for (var _i = 0; _i < source.length; _i++) {
		fn(source[_i]);
	}
	return 1;
};

module.exports = forEach;

//# sourceMappingURL=forEach.js.map