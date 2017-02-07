let forEach = (source, fn) => {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for(let i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			let n = i + 1;
			throw new Error(n + 'й аргумент функции forEach не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции forEach должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции forEach должен быть функцией');
	}
	for (let i = 0; i < source.length; i++) {
		fn(source[i]);
	}
	return 1;
};

module.exports = forEach;

