let map = (source, fn) => {
	try {
		if (typeof source !== 'object') {
			throw new Error('Первый параметр функции map должен быть массивом');
		}
		if (typeof fn !== 'function') {
			throw new Error('Второй параметр функции forEach должен быть функцией');
		}
		let out = [];
		for (let i = 0; i < source.length; i++) {
			out[i] = fn(source[i]);
		}
		return out;
	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = map;