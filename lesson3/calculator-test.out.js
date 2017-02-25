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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMy9jYWxjdWxhdG9yLXRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFxdWlsbGEgb24gMTIuMDEuMjAxNy5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGN1bGF0b3IoZmlyc3ROdW1iZXIpIHtcclxuXHRpZiAodHlwZW9mIGZpcnN0TnVtYmVyICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgZmlyc3ROdW1iZXIgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBmaXJzdE51bWJlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcign0J/QtdGA0LXQtNCw0L3QvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0YfQuNGB0LvQvtC8INC40LvQuCDRgdGC0YDQvtC60L7QuScpO1xyXG5cdH1cclxuXHR0aGlzLnN1bSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQktGLINC90LUg0L/QtdGA0LXQtNCw0LvQuCDQvdC40LrQsNC60LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQsiDRhNGD0L3QutGG0LjRjiBzdW0hJyk7XHJcblx0XHR9XHJcblx0XHRsZXQgcmVzID0gZmlyc3ROdW1iZXIgKiAxO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzICs9IGFyZ3VtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fTtcclxuXHR0aGlzLmRpZiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQktGLINC90LUg0L/QtdGA0LXQtNCw0LvQuCDQvdC40LrQsNC60LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQsiDRhNGD0L3QutGG0LjRjiBkaWYhJyk7XHJcblx0XHR9XHJcblx0XHRsZXQgcmVzID0gZmlyc3ROdW1iZXI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRyZXMgLT0gYXJndW1lbnRzW2ldO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9O1xyXG5cdHRoaXMuZGl2ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ9CS0Ysg0L3QtSDQv9C10YDQtdC00LDQu9C4INC90LjQutCw0LrQuNGFINC/0LDRgNCw0LzQtdGC0YDQvtCyINCyINGE0YPQvdC60YbQuNGOIGRpdiEnKTtcclxuXHRcdH1cclxuXHRcdGxldCByZXMgPSBmaXJzdE51bWJlcjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHNbaV0gPT0gMCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcign0J3QsCDQvdC+0LvRjCDQtNC10LvQuNGC0Ywg0L3QtdC70YzQt9GPIScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlcyAvPSBhcmd1bWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH07XHJcblx0dGhpcy5tdWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcign0JLRiyDQvdC1INC/0LXRgNC10LTQsNC70Lgg0L3QuNC60LDQutC40YUg0L/QsNGA0LDQvNC10YLRgNC+0LIg0LIg0YTRg9C90LrRhtC40Y4gbXVsIScpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHJlcyA9IGZpcnN0TnVtYmVyO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzICo9IGFyZ3VtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fTtcclxuXHRyZXR1cm4gdGhpcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjYWxjdWxhdG9yO1xyXG4vL2V4cG9ydCB7Y2FsY3VsYXRvcn07XHJcbiJdfQ==
