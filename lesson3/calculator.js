'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by aquilla on 12.01.2017.
 */
var calculator = function calculator(firstNumber) {
	try {
		//console.log(this);
		//console.log(typeof firstNumber);
		if (!(typeof firstNumber === 'undefined' ? 'undefined' : _typeof(firstNumber)) === 'number' && typeof firstNumber !== 'string' && typeof firstNumber === 'undefined') {
			throw new Error('Переданный параметр должен быть числом или строкой');
		}
	} catch (e) {
		console.error(e.message);
		firstNumber = 0;
		return this;
	} finally {
		this.sum = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber * 1;
				for (var i = 0; i < arguments.length; i++) {
					res += arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		this.dif = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber;
				for (var i = 0; i < arguments.length; i++) {
					res -= arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		this.div = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber;
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] == 0) {
						throw new Error('На ноль делить нельзя!');
					}
					res /= arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		this.mul = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber;
				for (var i = 0; i < arguments.length; i++) {
					res *= arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		return this;
	}
};

module.exports = calculator;

//# sourceMappingURL=calculator.js.map