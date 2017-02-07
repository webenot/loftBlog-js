let reduce = function (source, fn, initialValue) {
	try {
		if (typeof source === 'undefined') {
			throw new Error('Не передано первый параметр');
		}
		if (typeof fn !== 'function') {
			throw new Error('Второй параметр функции reduce должен быть функцией');
		}
		let object = Object(source);
		let result, key = 0,
			length = object.length;
		if (typeof initialValue !== 'undefined') {
			result = initialValue;
		} else {
			while(key < length && !(key in object)) {
				//console.log(!(key in object));
				key++;
			}
			if (key >= length) {
				throw new TypeError('Массив пуст и не задан третий параметр');
			}
			result = object[key++];
		}
		while (key < length) {
			if (key in object) {
				result = fn(result, object[key], key, object);
			}

			key++;
		}
		return result;
	} catch (e) {
		console.error(e.message);
		//return 0;
	}
};

module.exports = reduce;