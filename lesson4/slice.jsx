let slice = function () {
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
		throw new Error('Первый параметр функции slice должен быть массивом');
	}
	if ( typeof arguments[1] !== 'number') {
		throw new Error('Второй параметр функции slice должен быть числом');
	}
	let out = [], j = 0, array = arguments[0];
	let begin = (arguments[1] < 0) ? (array.length + 1 * arguments[1]) : (arguments[1] - 1);

	let end = (typeof arguments[2] !== 'undefined') ? arguments[2] - 1 : array.length - 1;

	for (let i = begin; i < end; i++) {
		out[j] = array[i];
		j++;
	}

	return out;
};

module.exports = slice;