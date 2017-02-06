let filter = (source, fn) => {
	try {
		if (typeof source !== 'object') {
			throw new Error('Первый параметр функции filter должен быть массивом');
		}
		if (typeof fn !== 'function') {
			throw new Error('Второй параметр функции forEach должен быть функцией');
		}
		let out = [], j = 0;
		for (let i = 0; i < source.length; i++) {
			if (fn(source[i])) {
				out[j] = source[i];
				j++;
			}
		}
		return out;
	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = filter;