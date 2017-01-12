/**
 * Created by aquilla on 12.01.2017.
 */
function isAllTrue(source, fn) {
	try {
		//console.log(Array.isArray(source));
		if (!Array.isArray(source)) {
			throw new Error('Первым параметром должен быть массив!');
		}
		if(source.length == 0) {
			throw new Error('Массив не должен быть пустым!');
		}
		//console.log(typeof fn);
		if (typeof fn !== 'function') {
			throw new Error('Вторым параметром должна быть функция!');
		}
		for(let i = 0; i < source.length; i++) {
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

let emptyArray = '';

console.log(isAllTrue(allNumbers, isNumber));
console.log(isAllTrue(someNumbers, isNumber));
console.log(isAllTrue(noNumbers, isNumber));
console.log(isAllTrue(emptyArray, isNumber));