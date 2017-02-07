let forEach = (source, fn) => {
	if (typeof source !== 'object') {
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

