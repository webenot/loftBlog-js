let deepEqual = function (obj1, obj2) {

	try {
		if (arguments.length === 0) {
			throw new Error('Вы не передали никаких аргументов');
		}
		if (typeof obj1 !== 'undefined' && typeof obj1 !== 'object') {
			throw new Error('Первый параметр функции deepEqual должен быть объектом');
		}
		if (typeof obj2 !== 'undefined' && typeof obj2 !== 'object') {
			throw new Error('Второй параметр функции deepEqual должен быть объектом');
		}

		let equality = true;

		if (obj1 === obj2)
			return true;

		if (obj1.length !== obj1.length) {
			return false;
		}

		for(let arg1 in obj1) {
			if (obj2[arg1] !== undefined) {
				if (obj2[arg1] === obj1[arg1]) {
					equality = equality && true;
				} else {
					if (typeof obj2[arg1] === 'object' && typeof obj1[arg1] === 'object') {
						if (obj2[arg1].length !==  obj1[arg1].length) {
							equality = equality && false;
						} else {
							try {
								if(obj1[arg1].getDate() === obj2[arg1].getDate() && obj1[arg1].valueOf() === obj2[arg1].valueOf()) {
									equality = equality && true;
								} else {
									equality = equality && false;
								}
							} catch (e) {
								try {
									obj2[arg1].forEach(function (item, i, arr) {});
									obj1[arg1].forEach(function (item, i, arr) {});
									for(let i = 0; i < obj1[arg1].length; i++) {
										if (obj1[arg1][i] === obj2[arg1][i]) {
											equality = equality && true;
										} else {
											if (typeof obj2[arg1][i] === 'object' && typeof obj1[arg1][i] === 'object') {
												if (obj2[arg1].length !==  obj1[arg1].length) {
													equality = equality && false;
												} else {
													equality = deepEqual(obj2[arg1], obj1[arg1]) && equality;
												}
											} else {
												equality = equality && false;
											}
										}
									}
								} catch (e) {
									equality = deepEqual(obj2[arg1], obj1[arg1]) && equality;
								}
							}
						}
					} else {
						equality = equality && false;
					}
				}
			} else {
				equality = equality && false;
			}
		}

		return equality;

	} catch (e) {
		console.error(e.message);
		return 0;
	}
};

module.exports = deepEqual;