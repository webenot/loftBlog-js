'use strict';

var slice = function slice() {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	if (typeof arguments[0] === 'undefined') {
		throw new Error('Первый аргумент функции slice не определен');
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции slice должен быть массивом');
	}
	if (isNaN(parseInt(arguments[1], 10))) {
		return arguments[0];
	}

	var out = [],
	    j = 0,
	    array = arguments[0];
	var begin = parseInt(arguments[1], 10) < 0 ? array.length + parseInt(arguments[1], 10) : parseInt(arguments[1], 10);

	var end = typeof arguments[2] !== 'undefined' ? parseInt(arguments[2], 10) : array.length - 1;

	for (var i = begin; i < end; i++) {
		out[j] = array[i];
		j++;
	}

	return out;
};

module.exports = slice;

//# sourceMappingURL=slice.js.map