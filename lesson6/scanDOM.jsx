let result = {};
result.classes = {};
result.tags = {};
result.text = 0;

let scan = function (container) {
	if(typeof container.childNodes === 'undefined') {
		return result;
	}
	if(container.childNodes.length === 0) {
		return result;
	}

	for (let i = 0; i < container.childNodes.length; i++) {
		//console.log(container.childNodes[i]);
		if (container.childNodes[i].nodeType === 3) {
			result.text++;
		} else {
			if (container.childNodes[i].classList.length) {
				for (let cls of container.childNodes[i].classList) {
					if (result.classes.hasOwnProperty(cls)) {
						result.classes[cls]++;
					} else {
						Object.defineProperty(result.classes, cls, { // Это дескриптор свойства fullName
							value: 1, // default undefined - нельзя использовать вместе с get
							enumerable: true, // default false
							writable: true, // default false - нельзя использовать вместе с get
							configurable: true // default false
						});
					}
				}
			}
			if (result.tags.hasOwnProperty(container.childNodes[i].nodeName)) {
				result.tags[container.childNodes[i].nodeName]++;
			} else {
				Object.defineProperty(result.tags, container.childNodes[i].nodeName, { // Это дескриптор свойства fullName
					value: 1, // default undefined - нельзя использовать вместе с get
					enumerable: true, // default false
					writable: true, // default false - нельзя использовать вместе с get
					configurable: true // default false
				});
			}
		}
	}
	for (let i = 0; i < container.children.length; i++) {
		if (container.children[i].children.length)
			scan(container.children[i]);
	}
	return result;
};

let scanDOM = function (container) {
	if (arguments.length === 0) {
		container = document.body;
	}
	scan(container);
	for (let prop in result.tags) {
		console.log('Тэгов ' + prop + ': ' + result.tags[prop]);
	}
	if (result.text)
		console.log('Текстовых узлов: ' + result.text);
	for (let prop in result.classes) {
		console.log('Элементов с классом ' + prop + ': ' + result.classes[prop]);
	}
};

module.exports = scanDOM;