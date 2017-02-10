let deleteTextNodes = function (source) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции deleteTextNodes');
	}
	if(typeof source === 'undefined') {
		return source;
	}
	if(typeof source.childNodes === 'undefined') {
		return source;
	}
	if (typeof source.nodeType === 'undefined') {
		return source;
	}
	if(source.childNodes.length === 0) {
		return source;
	}
	let indexes = [];
	for (let i = 0; i < source.childNodes.length; i++) {
		if (source.childNodes[i].nodeType === 3) {
			indexes.push(i);
		}
	}
	for (let i = 0; i < indexes.length; i++) {
		source.removeChild(source.childNodes[indexes[i] - i]);
	}
	for (let i = 0; i < source.childNodes.length; i++) {
		deleteTextNodes(source.childNodes[i]);
	}

	return source;
};

module.exports = deleteTextNodes;