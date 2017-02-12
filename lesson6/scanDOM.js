'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = {};
result.classes = {};
result.tags = {};
result.text = 0;

var scan = function scan(container) {
	if (typeof container.childNodes === 'undefined') {
		return result;
	}
	if (container.childNodes.length === 0) {
		return result;
	}

	for (var i = 0; i < container.childNodes.length; i++) {
		//console.log(container.childNodes[i]);
		if (container.childNodes[i].nodeType === 3) {
			result.text++;
		} else {
			if (container.childNodes[i].classList.length) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(container.childNodes[i].classList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var cls = _step.value;

						if (result.classes.hasOwnProperty(cls)) {
							result.classes[cls]++;
						} else {
							(0, _defineProperty2.default)(result.classes, cls, { // Это дескриптор свойства fullName
								value: 1, // default undefined - нельзя использовать вместе с get
								enumerable: true, // default false
								writable: true, // default false - нельзя использовать вместе с get
								configurable: true // default false
							});
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
			if (result.tags.hasOwnProperty(container.childNodes[i].nodeName)) {
				result.tags[container.childNodes[i].nodeName]++;
			} else {
				(0, _defineProperty2.default)(result.tags, container.childNodes[i].nodeName, { // Это дескриптор свойства fullName
					value: 1, // default undefined - нельзя использовать вместе с get
					enumerable: true, // default false
					writable: true, // default false - нельзя использовать вместе с get
					configurable: true // default false
				});
			}
		}
	}
	for (var _i = 0; _i < container.children.length; _i++) {
		if (container.children[_i].children.length) scan(container.children[_i]);
	}
	return result;
};

var scanDOM = function scanDOM(container) {
	if (arguments.length === 0) {
		container = document.body;
	}
	scan(container);
	for (var prop in result.tags) {
		console.log('Тэгов ' + prop + ': ' + result.tags[prop]);
	}
	if (result.text) console.log('Текстовых узлов: ' + result.text);
	for (var _prop in result.classes) {
		console.log('Элементов с классом ' + _prop + ': ' + result.classes[_prop]);
	}
};

module.exports = scanDOM;

//# sourceMappingURL=scanDOM.js.map