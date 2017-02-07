let slice = function () {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	if (typeof arguments[0] === 'undefined') {
		throw new Error('Первый аргумент функции slice не определен');
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции slice должен быть массивом');
	}
	if(isNaN(parseInt(arguments[1]))) {
		return arguments[0];
	}

	let out = [], j = 0, array = arguments[0];
	let begin = (parseInt(arguments[1]) < 0) ? (array.length + parseInt(arguments[1])) : parseInt(arguments[1]);

	let end = (typeof arguments[2] !== 'undefined') ? parseInt(arguments[2]) : array.length - 1;

	for (let i = begin; i < end; i++) {
		out[j] = array[i];
		j++;
	}

	return out;
};

module.exports = slice;