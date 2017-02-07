'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slice = function slice() {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	if ((0, _typeof3.default)(arguments[0]) !== 'object') {
		throw new Error('Первый параметр функции slice должен быть массивом');
	}
	for (var i = 1; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'undefined' && typeof arguments[i] !== 'number') {
			var n = (i + 1) * 1;
			throw new Error(n + 'й параметр функции splice должен быть числом');
		}
	}
	var out = [],
	    j = 0,
	    array = arguments[0];
	var begin = arguments[1] !== undefined ? arguments[1] < 0 ? array.length + 1 * arguments[1] : arguments[1] - 1 : 0;
	//console.log(begin);
	var end = arguments[2] !== undefined ? arguments[2] - 1 : array.length - 1;
	//console.log(end);
	for (var _i = begin; _i < end; _i++) {
		out[j] = array[_i];
		j++;
	}

	return out;
};

module.exports = slice;

//# sourceMappingURL=slice.js.map