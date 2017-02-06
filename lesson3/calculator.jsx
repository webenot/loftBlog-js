/**
 * Created by aquilla on 12.01.2017.
 */
let calculator = function (firstNumber) {
	try {
		//console.log(this);
		//console.log(typeof firstNumber);
		if (typeof firstNumber !== 'number' && typeof firstNumber !== 'string' && typeof firstNumber === 'undefined') {
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
				let res = firstNumber * 1;
				for (let i = 0; i < arguments.length; i++) {
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
				let res = firstNumber;
				for (let i = 0; i < arguments.length; i++) {
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
				let res = firstNumber;
				for (let i = 0; i < arguments.length; i++) {
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
				let res = firstNumber;
				for (let i = 0; i < arguments.length; i++) {
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
