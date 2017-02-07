let splice = function () {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for(let i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			let n = i + 1;
			throw new Error(n + 'й аргумент функции splice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции splice должен быть массивом');
	}
	if ( typeof arguments[1] !== 'number') {
		throw new Error('Второй параметр функции splice должен быть числом');
	}

	let out = [], array = arguments[0];
	let begin = parseInt(arguments[1]);
	let end = typeof arguments[2] !== 'undefined' ? parseInt(arguments[2]) : array.length;

	let arr = [];
	for (let i = 3, k = 0; i < arguments.length; i++, k++) {
		arr[k] = arguments[i];
	}

	for (let i = 0; i < begin; i++) {
		out[i] = array[i];
	}

	if(arr.length > 0) {
		for (let i = begin, k = 0; k < arr.length; i++, k++) {
			out[i] = arr[k];
		}
	}

	for (let i = end + begin, k = out.length; i < array.length; i++, k++) {
		out[k] = array[i];
	}

	return out;
};

module.exports = splice;