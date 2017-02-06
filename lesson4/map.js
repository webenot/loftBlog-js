'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = function map(source, fn) {
	try {
		if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) !== 'object') {
			throw new Error('Первый параметр функции map должен быть массивом');
		}
		if (typeof fn !== 'function') {
			throw new Error('Второй параметр функции forEach должен быть функцией');
		}
		var out = [];
		for (var i = 0; i < source.length; i++) {
			out[i] = fn(source[i]);
		}
		return out;
	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = map;

//# sourceMappingURL=map.js.map