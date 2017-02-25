(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
},{"./calculator-test":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMy9jYWxjdWxhdG9yLXRlc3QuanMiLCJEOi9DbG91ZEBNYWlsLlJ1L1dPUksvSmF2YVNjcmlwdC1sZWFybmluZy9sb2Z0QmxvZy1qcy9sZXNzb24zL2R6LXRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFxdWlsbGEgb24gMTIuMDEuMjAxNy5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGN1bGF0b3IoZmlyc3ROdW1iZXIpIHtcclxuXHRpZiAodHlwZW9mIGZpcnN0TnVtYmVyICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgZmlyc3ROdW1iZXIgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBmaXJzdE51bWJlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcign0J/QtdGA0LXQtNCw0L3QvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0YfQuNGB0LvQvtC8INC40LvQuCDRgdGC0YDQvtC60L7QuScpO1xyXG5cdH1cclxuXHR0aGlzLnN1bSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQktGLINC90LUg0L/QtdGA0LXQtNCw0LvQuCDQvdC40LrQsNC60LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQsiDRhNGD0L3QutGG0LjRjiBzdW0hJyk7XHJcblx0XHR9XHJcblx0XHRsZXQgcmVzID0gZmlyc3ROdW1iZXIgKiAxO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzICs9IGFyZ3VtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fTtcclxuXHR0aGlzLmRpZiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQktGLINC90LUg0L/QtdGA0LXQtNCw0LvQuCDQvdC40LrQsNC60LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQsiDRhNGD0L3QutGG0LjRjiBkaWYhJyk7XHJcblx0XHR9XHJcblx0XHRsZXQgcmVzID0gZmlyc3ROdW1iZXI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRyZXMgLT0gYXJndW1lbnRzW2ldO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9O1xyXG5cdHRoaXMuZGl2ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ9CS0Ysg0L3QtSDQv9C10YDQtdC00LDQu9C4INC90LjQutCw0LrQuNGFINC/0LDRgNCw0LzQtdGC0YDQvtCyINCyINGE0YPQvdC60YbQuNGOIGRpdiEnKTtcclxuXHRcdH1cclxuXHRcdGxldCByZXMgPSBmaXJzdE51bWJlcjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHNbaV0gPT0gMCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcign0J3QsCDQvdC+0LvRjCDQtNC10LvQuNGC0Ywg0L3QtdC70YzQt9GPIScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlcyAvPSBhcmd1bWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH07XHJcblx0dGhpcy5tdWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcign0JLRiyDQvdC1INC/0LXRgNC10LTQsNC70Lgg0L3QuNC60LDQutC40YUg0L/QsNGA0LDQvNC10YLRgNC+0LIg0LIg0YTRg9C90LrRhtC40Y4gbXVsIScpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHJlcyA9IGZpcnN0TnVtYmVyO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzICo9IGFyZ3VtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fTtcclxuXHRyZXR1cm4gdGhpcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjYWxjdWxhdG9yO1xyXG4vL2V4cG9ydCB7Y2FsY3VsYXRvcn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFxdWlsbGEgb24gMjEuMDIuMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFxdWlsbGEgb24gMTIuMDEuMjAxNy5cclxuICovXHJcbmZ1bmN0aW9uIGlzQWxsVHJ1ZShzb3VyY2UsIGZuKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShzb3VyY2UpKTtcclxuXHRcdGlmICghQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcign0J/QtdGA0LLRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvNCw0YHRgdC40LIhJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc291cmNlLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcign0JzQsNGB0YHQuNCyINC90LUg0LTQvtC70LbQtdC9INCx0YvRgtGMINC/0YPRgdGC0YvQvCEnKTtcclxuXHRcdH1cclxuXHRcdC8vY29uc29sZS5sb2codHlwZW9mIGZuKTtcclxuXHRcdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQktGC0L7RgNGL0Lwg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LTQvtC70LbQvdCwINCx0YvRgtGMINGE0YPQvdC60YbQuNGPIScpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCFpc051bWJlcihzb3VyY2VbaV0pKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xyXG5cdHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcclxufVxyXG5cclxubGV0IGFsbE51bWJlcnMgPSBbMSwgMiwgNCwgNSwgNiwgNywgOF0sXHJcblx0c29tZU51bWJlcnMgPSBbMSwgMiwgJ9C/0YDQuNCy0LXRgicsIDQsIDUsICdsb2Z0c2Nob29sJywgNiwgNywgOF0sXHJcblx0bm9OdW1iZXJzID0gWyfRjdGC0L4nLCAn0LzQsNGB0YHQuNCyJywgJ9Cx0LXQtycsICfRh9C40YHQtdC7J107XHJcblxyXG5sZXQgZW1wdHlBcnJheSA9IFtdO1xyXG5cclxuY29uc29sZS5sb2coaXNBbGxUcnVlKGFsbE51bWJlcnMsIGlzTnVtYmVyKSk7XHJcbmNvbnNvbGUubG9nKGlzQWxsVHJ1ZShzb21lTnVtYmVycywgaXNOdW1iZXIpKTtcclxuY29uc29sZS5sb2coaXNBbGxUcnVlKG5vTnVtYmVycywgaXNOdW1iZXIpKTtcclxuLy9jb25zb2xlLmxvZyhpc0FsbFRydWUoZW1wdHlBcnJheSwgaXNOdW1iZXIpKTtcclxuXHJcbmNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XHJcblxyXG5mdW5jdGlvbiBpc1NvbWVUcnVlKHNvdXJjZSwgZm4pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHNvdXJjZSkpO1xyXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQn9C10YDQstGL0Lwg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LTQvtC70LbQtdC9INCx0YvRgtGMINC80LDRgdGB0LjQsiEnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzb3VyY2UubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQnNCw0YHRgdC40LIg0L3QtSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8IScpO1xyXG5cdFx0fVxyXG5cdFx0Ly9jb25zb2xlLmxvZyh0eXBlb2YgZm4pO1xyXG5cdFx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ9CS0YLQvtGA0YvQvCDQv9Cw0YDQsNC80LXRgtGA0L7QvCDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YTRg9C90LrRhtC40Y8hJyk7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaXNOdW1iZXIoc291cmNlW2ldKSlcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhpc1NvbWVUcnVlKGFsbE51bWJlcnMsIGlzTnVtYmVyKSk7XHJcbmNvbnNvbGUubG9nKGlzU29tZVRydWUoc29tZU51bWJlcnMsIGlzTnVtYmVyKSk7XHJcbmNvbnNvbGUubG9nKGlzU29tZVRydWUobm9OdW1iZXJzLCBpc051bWJlcikpO1xyXG4vL2NvbnNvbGUubG9nKGlzU29tZVRydWUoZW1wdHlBcnJheSwgaXNOdW1iZXIpKTtcclxuXHJcbmNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09RFogMz09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcclxuXHJcbi8vY29uc29sZS5sb2codHlwZW9mICdzdHJpbmcnKTtcclxuXHJcbi8qXHJcbiBsZXQgY2FsY3VsYXRvciA9IGZ1bmN0aW9uIChmaXJzdE51bWJlcikge1xyXG4gdHJ5IHtcclxuIC8vY29uc29sZS5sb2codGhpcyk7XHJcbiAvL2NvbnNvbGUubG9nKHR5cGVvZiBmaXJzdE51bWJlcik7XHJcbiBpZiAoIWlzTnVtYmVyKGZpcnN0TnVtYmVyKSAmJiB0eXBlb2YgZmlyc3ROdW1iZXIgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBmaXJzdE51bWJlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuIHRocm93IG5ldyBFcnJvcign0J/QtdGA0LXQtNCw0L3QvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0YfQuNGB0LvQvtC8INC40LvQuCDRgdGC0YDQvtC60L7QuScpO1xyXG4gfVxyXG4gfSBjYXRjaCAoZSkge1xyXG4gY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gZmlyc3ROdW1iZXIgPSAwO1xyXG4gcmV0dXJuIHRoaXM7XHJcbiB9IGZpbmFsbHkge1xyXG4gdGhpcy5zdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiB0cnkge1xyXG4gaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG4gdGhyb3cgbmV3IEVycm9yKCfQktGLINC90LUg0L/QtdGA0LXQtNCw0LvQuCDQvdC40LrQsNC60LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiEnKTtcclxuIH1cclxuIGxldCByZXMgPSBmaXJzdE51bWJlciAqIDE7XHJcbiBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gcmVzICs9IGFyZ3VtZW50c1tpXTtcclxuIH1cclxuIHJldHVybiByZXM7XHJcbiB9IGNhdGNoIChlKSB7XHJcbiBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiByZXR1cm4gMDtcclxuIH1cclxuIH07XHJcbiB0aGlzLmRpZiA9IGZ1bmN0aW9uICgpIHtcclxuIHRyeSB7XHJcbiBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiB0aHJvdyBuZXcgRXJyb3IoJ9CS0Ysg0L3QtSDQv9C10YDQtdC00LDQu9C4INC90LjQutCw0LrQuNGFINC/0LDRgNCw0LzQtdGC0YDQvtCyIScpO1xyXG4gfVxyXG4gbGV0IHJlcyA9IGZpcnN0TnVtYmVyO1xyXG4gZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuIHJlcyAtPSBhcmd1bWVudHNbaV07XHJcbiB9XHJcbiByZXR1cm4gcmVzO1xyXG4gfSBjYXRjaCAoZSkge1xyXG4gY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gcmV0dXJuIDA7XHJcbiB9XHJcbiB9O1xyXG4gdGhpcy5kaXYgPSBmdW5jdGlvbiAoKSB7XHJcbiB0cnkge1xyXG4gaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG4gdGhyb3cgbmV3IEVycm9yKCfQktGLINC90LUg0L/QtdGA0LXQtNCw0LvQuCDQvdC40LrQsNC60LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiEnKTtcclxuIH1cclxuIGxldCByZXMgPSBmaXJzdE51bWJlcjtcclxuIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiBpZiAoYXJndW1lbnRzW2ldID09IDApIHtcclxuIHRocm93IG5ldyBFcnJvcign0J3QsCDQvdC+0LvRjCDQtNC10LvQuNGC0Ywg0L3QtdC70YzQt9GPIScpO1xyXG4gfVxyXG4gcmVzIC89IGFyZ3VtZW50c1tpXTtcclxuIH1cclxuIHJldHVybiByZXM7XHJcbiB9IGNhdGNoIChlKSB7XHJcbiBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiByZXR1cm4gMDtcclxuIH1cclxuIH07XHJcbiB0aGlzLm11bCA9IGZ1bmN0aW9uICgpIHtcclxuIHRyeSB7XHJcbiBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiB0aHJvdyBuZXcgRXJyb3IoJ9CS0Ysg0L3QtSDQv9C10YDQtdC00LDQu9C4INC90LjQutCw0LrQuNGFINC/0LDRgNCw0LzQtdGC0YDQvtCyIScpO1xyXG4gfVxyXG4gbGV0IHJlcyA9IGZpcnN0TnVtYmVyO1xyXG4gZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuIHJlcyAqPSBhcmd1bWVudHNbaV07XHJcbiB9XHJcbiByZXR1cm4gcmVzO1xyXG4gfSBjYXRjaCAoZSkge1xyXG4gY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gcmV0dXJuIDA7XHJcbiB9XHJcbiB9O1xyXG4gcmV0dXJuIHRoaXM7XHJcbiB9XHJcbiB9O1xyXG4gKi9cclxuXHJcbmxldCBjYWxjdWxhdG9yID0gcmVxdWlyZSgnLi9jYWxjdWxhdG9yLXRlc3QnKTtcclxuLy9pbXBvcnQge2NhbGN1bGF0b3IgYXMgY2FsY30gZnJvbSAnLi9jYWxjdWxhdG9yLXRlc3QnO1xyXG5cclxubGV0IG15Q2FsY3VsYXRvciA9IGNhbGN1bGF0b3IoMTAwKTtcclxuXHJcbmNvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5zdW0oMSwgMiwgMykpOyAvL9Cy0LXRgNC90LXRgiAxMDZcclxuY29uc29sZS5sb2cobXlDYWxjdWxhdG9yLmRpZigxMCwgMjApKTsgLy/QstC10YDQvdC10YIgNzBcclxuY29uc29sZS5sb2cobXlDYWxjdWxhdG9yLmRpdigyLCAyKSk7IC8v0LLQtdGA0L3QtdGCIDI1XHJcbmNvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5tdWwoMiwgMikpOyAvL9Cy0LXRgNC90LXRgiA0MDAiXX0=
