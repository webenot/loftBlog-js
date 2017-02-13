'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accordeon = document.querySelector('#accordeon');

var openAccordeon = function openAccordeon(e) {
	if (e.target.lastElementChild !== null) {
		//e.target.lastElementChild.classList.toggle('hidden');
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(e.target.parentNode.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				if (item.lastElementChild.className != 'hidden' && item != e.target) item.lastElementChild.classList.toggle('hidden');
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

		e.target.lastElementChild.classList.toggle('hidden');
	}
};

accordeon.addEventListener('click', openAccordeon);

//# sourceMappingURL=dz.js.map