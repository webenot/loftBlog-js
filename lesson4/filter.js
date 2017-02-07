'use strict';

var _arguments = arguments;
var filter = function filter(source, fn) {
	if (_arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof _arguments[i] !== 'undefined') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции filter не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции filter должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции filter должен быть функцией');
	}
	var out = [],
	    j = 0;
	for (var _i = 0; _i < source.length; _i++) {
		if (fn(source[_i])) {
			out[j] = source[_i];
			j++;
		}
	}
	return out;
};

module.exports = filter;

//# sourceMappingURL=filter.js.map