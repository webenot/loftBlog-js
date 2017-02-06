let forEach = (source, fn) => {
	try {
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
	} catch (e) {
		console.error(e.message);
		return 0;
	}

};

module.exports = forEach;

