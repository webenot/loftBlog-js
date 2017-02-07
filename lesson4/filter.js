'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filter = function filter(source, fn) {
	if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) !== 'object') {
		throw new Error('Первый параметр функции filter должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции forEach должен быть функцией');
	}
	var out = [],
	    j = 0;
	for (var i = 0; i < source.length; i++) {
		if (fn(source[i])) {
			out[j] = source[i];
			j++;
		}
	}
	return out;
};

module.exports = filter;

//# sourceMappingURL=filter.js.map