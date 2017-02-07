'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepEqual = function deepEqual(obj1, obj2) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции deepEqual');
	}
	if (obj1 === obj2) return true;

	if ((typeof obj2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj2)) !== 'object' && (typeof obj1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj1)) !== 'object') {
		return false;
	}

	if (obj2.length !== obj1.length) {
		return false;
	}

	var equality = true;

	for (var arg1 in obj1) {
		if (obj2[arg1] !== undefined) {
			if (obj2[arg1] === obj1[arg1]) {
				equality = equality && true;
			} else {
				if ((typeof obj2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj2)) !== 'object' && (typeof obj1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj1)) !== 'object') {
					return false;
				}
				if (obj2[arg1].length !== obj1[arg1].length) {
					return false;
				}
				if (obj2[arg1] instanceof Date && obj1[arg1] instanceof Date) {
					if (obj2[arg1].valueOf() === obj1[arg1].valueOf()) {
						equality = equality && true;
					} else {
						return false;
					}
				} else {
					if (obj2[arg1] instanceof Array && obj1[arg1] instanceof Array) {
						if (obj2[arg1].length !== obj1[arg1].length) {
							return false;
						}
						for (var i = 0; i < obj2[arg1].length; i++) {
							equality = deepEqual(obj2[arg1][i], obj1[arg1][i]) && equality;
						}
					} else {
						equality = deepEqual(obj2[arg1], obj1[arg1]) && equality;
					}
				}
			}
		} else {
			return false;
		}
	}

	return equality;
};

module.exports = deepEqual;

//# sourceMappingURL=deepEqual.js.map