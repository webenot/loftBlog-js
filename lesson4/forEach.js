'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var forEach = function forEach(source, fn) {
	try {
		if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) !== 'object') {
			throw new Error('Первый параметр функции forEach должен быть массивом');
		}
		if (typeof fn !== 'function') {
			throw new Error('Второй параметр функции forEach должен быть функцией');
		}
		for (var i = 0; i < source.length; i++) {
			fn(source[i]);
		}
		return 1;
	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = forEach;

//# sourceMappingURL=forEach.js.map