'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepEqual = function deepEqual(obj1, obj2) {
	//console.log(arguments.length);
	try {
		if (arguments.length === 0) {
			throw new Error('Вы не передали никаких аргументов');
		}
		if (typeof obj1 !== 'undefined' && (typeof obj1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj1)) !== 'object') {
			throw new Error('Первый параметр функции deepEqual должен быть объектом');
		}
		if (typeof obj2 !== 'undefined' && (typeof obj2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj2)) !== 'object') {
			throw new Error('Второй параметр функции deepEqual должен быть объектом');
		}

		var equality = true;

		if (obj1 === obj2) return true;

		if (obj1.length !== obj1.length) {
			return false;
		}

		for (var arg1 in obj1) {
			if (obj2[arg1] !== undefined) {
				if (obj2[arg1] === obj1[arg1]) {
					equality = equality && true;
				} else {
					if ((0, _typeof3.default)(obj2[arg1]) === 'object' && (0, _typeof3.default)(obj1[arg1]) === 'object') {
						if (obj2[arg1].length !== obj1[arg1].length) {
							equality = equality && false;
						} else {
							try {
								if (obj1[arg1].getDate() === obj2[arg1].getDate() && obj1[arg1].getMonth() === obj2[arg1].getMonth() && obj1[arg1].getFullYear() === obj2[arg1].getFullYear() && obj1[arg1].getHours() === obj2[arg1].getHours() && obj1[arg1].getMinutes() === obj2[arg1].getMinutes() && obj1[arg1].getSeconds() === obj2[arg1].getSeconds() && obj1[arg1].getMilliseconds() === obj2[arg1].getMilliseconds()) {
									equality = equality && true;
								} else {
									equality = equality && false;
								}
							} catch (e) {
								try {
									obj2[arg1].forEach(function (item, i, arr) {});
									obj1[arg1].forEach(function (item, i, arr) {});
									for (var i = 0; i < obj1[arg1].length; i++) {
										if (obj1[arg1][i] === obj2[arg1][i]) {
											equality = equality && true;
										} else {
											if ((0, _typeof3.default)(obj2[arg1][i]) === 'object' && (0, _typeof3.default)(obj1[arg1][i]) === 'object') {
												if (obj2[arg1].length !== obj1[arg1].length) {
													equality = equality && false;
												} else {
													equality = deepEqual(obj2[arg1], obj1[arg1]) && equality;
												}
											} else {
												equality = equality && false;
											}
										}
									}
								} catch (e) {
									equality = deepEqual(obj2[arg1], obj1[arg1]) && equality;
								}
							}
						}
					} else {
						equality = equality && false;
					}
				}
			} else {
				equality = equality && false;
			}
		}

		return equality;
	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = deepEqual;

//# sourceMappingURL=deepEqual.js.map