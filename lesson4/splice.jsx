let splice = function () {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for(let i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			let n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции slice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции splice должен быть массивом');
	}
	if ( typeof arguments[1] !== 'number') {
		throw new Error('Второй параметр функции slice должен быть числом');
	}

	let out = [], array = arguments[0];
	let begin = arguments[1];
	let end = typeof arguments[2] !== 'undefined' ? arguments[2] : array.length;

	let arr = [];
	for (let i = 3, k = 0; i < arguments.length; i++, k++) {
		arr[k] = arguments[i];
	}

	if(begin === null) {
		throw new Error('Вы не ввели номер первого элемента, с которого следует начать удаление');
	}

	for (let i = 0; i < begin; i++) {
		out[i] = array[i];
	}

	if(arr.length > 0) {
		for (let i = begin, k = 0; k < arr.length; i++, k++) {
			out[i] = arr[k];
		}
	}

	for (let i = (end + begin) * 1, k = out.length; i < array.length; i++, k++) {
		out[k] = array[i];
	}

	return out;
};

module.exports = splice;