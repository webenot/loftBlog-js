let map = (source, fn) => {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for(let i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			let n = (i + 1) * 1;
			throw new Error(n + 'й аргумент функции map не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции map должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции map должен быть функцией');
	}
	let out = [];
	for (let i = 0; i < source.length; i++) {
		out[i] = fn(source[i]);
	}
	return out;
};

module.exports = map;