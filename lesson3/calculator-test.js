/**
 * Created by aquilla on 12.01.2017.
 */
function calculator(firstNumber) {
	if (typeof firstNumber !== 'number' && typeof firstNumber !== 'string' && typeof firstNumber === 'undefined') {
		throw new Error('Переданный параметр должен быть числом или строкой');
	}
	this.sum = function () {
		if (arguments.length == 0) {
			throw new Error('Вы не передали никаких параметров в функцию sum!');
		}
		let res = firstNumber * 1;
		for (let i = 0; i < arguments.length; i++) {
			res += arguments[i];
		}
		return res;
	};
	this.dif = function () {
		if (arguments.length == 0) {
			throw new Error('Вы не передали никаких параметров в функцию dif!');
		}
		let res = firstNumber;
		for (let i = 0; i < arguments.length; i++) {
			res -= arguments[i];
		}
		return res;
	};
	this.div = function () {
		if (arguments.length == 0) {
			throw new Error('Вы не передали никаких параметров в функцию div!');
		}
		let res = firstNumber;
		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] == 0) {
				throw new Error('На ноль делить нельзя!');
			}
			res /= arguments[i];
		}
		return res;
	};
	this.mul = function () {
		if (arguments.length == 0) {
			throw new Error('Вы не передали никаких параметров в функцию mul!');
		}
		let res = firstNumber;
		for (let i = 0; i < arguments.length; i++) {
			res *= arguments[i];
		}
		return res;
	};
	return this;
}

module.exports = calculator;
//export {calculator};
