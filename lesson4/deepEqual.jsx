let deepEqual = function (obj1, obj2) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции deepEqual');
	}
	if (obj1 === obj2)
		return true;

	if (typeof obj2 !== 'object' || typeof obj1 !== 'object') {
		return false;
	}

	if (Object.keys(obj2).length !==  Object.keys(obj1).length) {
		return false;
	}

	let equality = true;

	for(let arg1 in obj1) {
		if (obj2.hasOwnProperty(arg1)) {
			if (obj2[arg1] === obj1[arg1]) {
				equality = equality && true;
			} else {
				if (typeof obj2 !== 'object' || typeof obj1 !== 'object') {
					return false;
				}
				if (obj2[arg1] instanceof Date && obj1[arg1] instanceof Date) {
					if (obj2[arg1].valueOf() === obj1[arg1].valueOf()) {
						equality = equality && true;
					} else {
						return false;
					}
				} else {
					if (obj2[arg1] instanceof Array && obj1[arg1] instanceof Array) {
						if (obj2[arg1].length !==  obj1[arg1].length) {
							return false;
						}
						for (let i = 0; i < obj2[arg1].length; i++) {
							equality = deepEqual(obj2[arg1][i], obj1[arg1][i]) && equality;
						}
					} else {
						equality = deepEqual(obj2[arg1], obj1[arg1]) && equality;
					}
				}
			}
		} else {
			return false;
		}
	}

	return equality;

};

module.exports = deepEqual;