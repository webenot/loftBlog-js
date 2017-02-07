'use strict';

var _arguments = arguments;
var map = function map(source, fn) {
	if (_arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof _arguments[i] !== 'undefined') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции map не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции map должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции map должен быть функцией');
	}
	var out = [];
	for (var _i = 0; _i < source.length; _i++) {
		out[_i] = fn(source[_i]);
	}
	return out;
};

module.exports = map;

//# sourceMappingURL=map.js.map