'use strict';

var deleteTextNodes = function deleteTextNodes(source) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции deleteTextNodes');
	}
	if (typeof source === 'undefined') {
		return source;
	}
	if (typeof source.childNodes === 'undefined') {
		return source;
	}
	if (typeof source.nodeType === 'undefined') {
		return source;
	}
	if (source.childNodes.length === 0) {
		return source;
	}
	var indexes = [];
	for (var i = 0; i < source.childNodes.length; i++) {
		if (source.childNodes[i].nodeType === 3) {
			indexes.push(i);
		}
	}
	for (var _i = 0; _i < indexes.length; _i++) {
		source.removeChild(source.childNodes[indexes[_i] - _i]);
	}
	for (var _i2 = 0; _i2 < source.childNodes.length; _i2++) {
		deleteTextNodes(source.childNodes[_i2]);
	}

	return source;
};

module.exports = deleteTextNodes;

//# sourceMappingURL=deleteTextNodes.js.map