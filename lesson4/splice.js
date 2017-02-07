'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var splice = function splice() {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	if ((0, _typeof3.default)(arguments[0]) !== 'object') {
		throw new Error('Первый параметр функции splice должен быть массивом');
	}
	for (var i = 1; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'undefined' && typeof arguments[i] !== 'number') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й параметр функции splice должен быть числом');
		}
	}
	var out = [],
	    array = arguments[0];
	var begin = arguments[1] !== undefined ? arguments[1] : null;
	var end = arguments[2] !== undefined ? arguments[2] : array.length;

	var arr = [];
	for (var _i = 3, k = 0; _i < arguments.length; _i++, k++) {
		arr[k] = arguments[_i];
	}

	if (begin === null) {
		throw new Error('Вы не ввели номер первого элемента, с которого следует начать удаление');
	}

	for (var _i2 = 0; _i2 < begin; _i2++) {
		out[_i2] = array[_i2];
	}

	if (arr.length > 0) {
		for (var _i3 = begin, _k = 0; _k < arr.length; _i3++, _k++) {
			out[_i3] = arr[_k];
		}
	}

	for (var _i4 = (end + begin) * 1, _k2 = out.length; _i4 < array.length; _i4++, _k2++) {
		out[_k2] = array[_i4];
	}

	return out;
};

module.exports = splice;

//# sourceMappingURL=splice.js.map