let filter = (source, fn) => {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for(let i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			let n = i + 1;
			throw new Error(n + 'й аргумент функции filter не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции filter должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции filter должен быть функцией');
	}
	let out = [], j = 0;
	for (let i = 0; i < source.length; i++) {
		if (fn(source[i])) {
			out[j] = source[i];
			j++;
		}
	}
	return out;
};

module.exports = filter;