'use strict';

var prepend = function prepend(container, newElement) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции prepend');
	}
	if (container.nodeType !== 1 && container.nodeType !== 11) {
		throw new Error('Первый аргумент функции prepend должен быть контейнером DOM');
	}
	if (newElement.nodeType !== 1 && newElement.nodeType !== 3 && newElement.nodeType !== 4 && newElement.nodeType !== 5 && newElement.nodeType !== 6 && newElement.nodeType !== 8 && newElement.nodeType !== 11 && newElement.nodeType !== 12) {
		throw new Error('Первый аргумент функции prepend должен быть узлом DOM');
	}
	container.insertBefore(newElement, container.firstChild);
	return newElement;
};

module.exports = prepend;

//# sourceMappingURL=prepend.js.map