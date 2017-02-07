function splice(source, start, length) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for(let i = 0; i < 2; i++) {
		if (typeof arguments[i] === 'undefined') {
			let n = i + 1;
			throw new Error(n + 'й аргумент функции splice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции splice должен быть массивом');
	}

	let out = [], array = arguments[0];
	let begin = isNaN(parseInt(arguments[1])) ? 0 : parseInt(arguments[1]);
	let end = typeof arguments[2] !== 'undefined' || !isNaN(parseInt(arguments[2])) ? parseInt(arguments[2]) : array.length;

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

	for (let i = begin + end, k = out.length; i < array.length; i++, k++) {
		out[k] = array[i];
	}

	let removed = [];
	for(let i = begin, k = 0; i < begin + end; i++, k++) {
		removed[k] = array[i];
	}

	for (let i = 0; i < out.length; i++) {
		source[i] = out[i];
	}

	return removed;
}

module.exports = splice;