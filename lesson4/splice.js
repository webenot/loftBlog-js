'use strict';

function splice(source, start, length) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof arguments[i] === 'undefined') {
			var n = i + 1;
			throw new Error(n + 'й аргумент функции splice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции splice должен быть массивом');
	}

	var out = [],
	    array = arguments[0];
	var begin = isNaN(parseInt(arguments[1], 10)) ? 0 : parseInt(arguments[1], 10);
	var end = typeof arguments[2] !== 'undefined' || !isNaN(parseInt(arguments[2], 10)) ? parseInt(arguments[2], 10) : array.length;

	var arr = [];
	for (var _i = 3, k = 0; _i < arguments.length; _i++, k++) {
		arr[k] = arguments[_i];
	}

	for (var _i2 = 0; _i2 < begin; _i2++) {
		out[_i2] = array[_i2];
	}

	if (arr.length > 0) {
		for (var _i3 = begin, _k = 0; _k < arr.length; _i3++, _k++) {
			out[_i3] = arr[_k];
		}
	}

	for (var _i4 = begin + end, _k2 = out.length; _i4 < array.length; _i4++, _k2++) {
		out[_k2] = array[_i4];
	}

	var removed = [];
	for (var _i5 = begin, _k3 = 0; _i5 < begin + end; _i5++, _k3++) {
		removed[_k3] = array[_i5];
	}

	for (var _i6 = 0; _i6 < out.length; _i6++) {
		source[_i6] = out[_i6];
	}

	return removed;
}

module.exports = splice;

//# sourceMappingURL=splice.js.map