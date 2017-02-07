'use strict';

var reduce = function reduce(source, fn, initialValue) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции reduce не определен');
		}
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции reduce должен быть функцией');
	}

	var object = Object(source);
	var result = void 0,
	    key = 0,
	    length = object.length;
	if (typeof initialValue !== 'undefined') {
		result = initialValue;
	} else {
		while (key < length && !(key in object)) {
			//console.log(!(key in object));
			key++;
		}
		if (key >= length) {
			throw new TypeError('Массив пуст и не задан третий параметр');
		}
		result = object[key++];
	}
	while (key < length) {
		if (key in object) {
			result = fn(result, object[key], key, object);
		}

		key++;
	}
	return result;
};

module.exports = reduce;

//# sourceMappingURL=reduce.js.map