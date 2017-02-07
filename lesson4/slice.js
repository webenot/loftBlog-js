'use strict';

var slice = function slice() {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции slice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции slice должен быть массивом');
	}
	if (typeof arguments[1] !== 'number') {
		throw new Error('Второй параметр функции slice должен быть числом');
	}
	var out = [],
	    j = 0,
	    array = arguments[0];
	var begin = arguments[1] < 0 ? array.length + 1 * arguments[1] : arguments[1] - 1;

	var end = typeof arguments[2] !== 'undefined' ? arguments[2] - 1 : array.length - 1;

	for (var _i = begin; _i < end; _i++) {
		out[j] = array[_i];
		j++;
	}

	return out;
};

module.exports = slice;

//# sourceMappingURL=slice.js.map