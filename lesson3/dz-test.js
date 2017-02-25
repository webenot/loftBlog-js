/**
 * Created by aquilla on 21.02.2017.
 */
/**
 * Created by aquilla on 12.01.2017.
 */
function isAllTrue(source, fn) {
	try {
		//console.log(Array.isArray(source));
		if (!Array.isArray(source)) {
			throw new Error('Первым параметром должен быть массив!');
		}
		if (source.length == 0) {
			throw new Error('Массив не должен быть пустым!');
		}
		//console.log(typeof fn);
		if (typeof fn !== 'function') {
			throw new Error('Вторым параметром должна быть функция!');
		}
		for (let i = 0; i < source.length; i++) {
			if (!isNumber(source[i]))
				return false;
		}
		return true;
	} catch (e) {
		console.error(e.message);
		return false;
	}
}

function isNumber(val) {
	return typeof val === 'number';
}

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
	someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
	noNumbers = ['это', 'массив', 'без', 'чисел'];

let emptyArray = [];

console.log(isAllTrue(allNumbers, isNumber));
console.log(isAllTrue(someNumbers, isNumber));
console.log(isAllTrue(noNumbers, isNumber));
//console.log(isAllTrue(emptyArray, isNumber));

console.log('=======================================================');

function isSomeTrue(source, fn) {
	try {
		//console.log(Array.isArray(source));
		if (!Array.isArray(source)) {
			throw new Error('Первым параметром должен быть массив!');
		}
		if (source.length == 0) {
			throw new Error('Массив не должен быть пустым!');
		}
		//console.log(typeof fn);
		if (typeof fn !== 'function') {
			throw new Error('Вторым параметром должна быть функция!');
		}
		for (let i = 0; i < source.length; i++) {
			if (isNumber(source[i]))
				return true;
		}
		return false;
	} catch (e) {
		console.error(e.message);
		return false;
	}
}

console.log(isSomeTrue(allNumbers, isNumber));
console.log(isSomeTrue(someNumbers, isNumber));
console.log(isSomeTrue(noNumbers, isNumber));
//console.log(isSomeTrue(emptyArray, isNumber));

console.log('===================DZ 3=========================');

//console.log(typeof 'string');

/*
 let calculator = function (firstNumber) {
 try {
 //console.log(this);
 //console.log(typeof firstNumber);
 if (!isNumber(firstNumber) && typeof firstNumber !== 'string' && typeof firstNumber === 'undefined') {
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
 */

let calculator = require('./calculator-test');
//import {calculator as calc} from './calculator-test';

let myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400