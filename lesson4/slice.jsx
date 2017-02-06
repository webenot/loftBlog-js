let slice = function () {
	//console.log(arguments.length);
	try {

		if (arguments.length === 0) {
			throw new Error('Вы не передали никаких аргументов');
		}
		if (typeof arguments[0] !== 'object') {
			throw new Error('Первый параметр функции slice должен быть массивом');
		}
		for(let i = 1; i < arguments.length; i++) {
			if (typeof arguments[i] !== 'undefined' && typeof arguments[i] !== 'number') {
				let n = (i + 1) * 1;
				throw new Error(n + 'й параметр функции splice должен быть числом');
			}
		}
		let out = [], j = 0, array = arguments[0];
		let begin = (arguments[1] !== undefined) ? ((arguments[1] < 0) ? (array.length + 1 * arguments[1]) : (arguments[1] - 1)): 0;
		//console.log(begin);
		let end = arguments[2] !== undefined ? arguments[2] - 1 : array.length - 1;
		//console.log(end);
		for (let i = begin; i < end; i++) {
			out[j] = array[i];
			j++;
		}

		return out;
	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = slice;