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

// Без промисов
/*window.addEventListener('load', (e) => {
	VK.init({
		apiId: 5883860
	});

	VK.Auth.login(response => {
		if (response.status == 'connected') {
			console.log(response);
			VK.api('users.get', {'name_case': 'gen'}, response => {
				if (response.error) {
					alert(response.error.error_msg);
				} else {
					headerInfo.textContent = `Музыка на странице ${response.response[0].first_name} ${response.response[0].last_name}`;
					console.log(response);
				}
			});
		} else {
			alert(`Ошибка: ${e.message}`);
		}
	}, 8);
});*/


new Promise(resolve =>{
	if (document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(() => {
	return new Promise((resolve, reject) => {
		VK.init({
			apiId: 5883860
		});

		VK.Auth.login(response => {
			if (response.status == 'connected') {
				console.log(response);
				resolve(response);
			} else {
				reject(new Error('Не удалось авторизироваться'));
			}
		}, 8);//1 | 2 | 4 | 8 | 16 | 128 | 256 | 1024 | 2048 | 8192 | 32768 | 65536 | 131072 | 262144 | 524288 | 1048576 | 4194304 | 134217728);
	});
}).then(() => {
	return new Promise((resolve, reject) => {
		VK.api('users.get', {'name_case': 'gen'}, response => {
			if (response.error) {
				reject(new Error(response.error.error_msg));
			} else {
				headerInfo.textContent = `Музыка на странице ${response.response[0].first_name} ${response.response[0].last_name}`;
				console.log(response);
				resolve();
			}
		});
	});
}).catch(e => {
	alert(`Ошибка: ${e.message}`);
});
