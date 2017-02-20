'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
VK.init({
	apiId: 5883860
});

let cb = response => {
	if (response.status == 'connected') {
		console.log('авторизация прошла успешно', response);
	} else {
		console.log('ошибка авторизации', response);
	}
};

VK.Auth.login(cb);*/

new _promise2.default(function (resolve) {
	if (document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(function () {
	return new _promise2.default(function (resolve, reject) {
		VK.init({
			apiId: 5883860
		});

		VK.Auth.login(function (response) {
			if (response.status == 'connected') {
				console.log(response);
				resolve(response);
			} else {
				reject(new Error('Не удалось авторизироваться'));
			}
		}, 8); //1 | 2 | 4 | 8 | 16 | 128 | 256 | 1024 | 2048 | 8192 | 32768 | 65536 | 131072 | 262144 | 524288 | 1048576 | 4194304 | 134217728);
	});
}).then(function () {
	return new _promise2.default(function (resolve, reject) {
		VK.api('users.get', { 'name_case': 'gen' }, function (response) {
			if (response.error) {
				reject(new Error(response.error.error_msg));
			} else {
				headerInfo.textContent = '\u041C\u0443\u0437\u044B\u043A\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ' + response.response[0].first_name + ' ' + response.response[0].last_name;
				console.log(response);
				resolve();
			}
		});
	});
}).catch(function (e) {
	alert('\u041E\u0448\u0438\u0431\u043A\u0430: ' + e.message);
});

//# sourceMappingURL=index.js.map