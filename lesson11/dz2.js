/**
 * Created by aquilla on 25.02.2017.
 */
new Promise(resolve =>{
	if (document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(() => {
	return new Promise((resolve, reject) => {
		if (VK) {
			VK.init({
				apiId: 5883860
			});

			VK.Auth.login(response => {
				if (response.status == 'connected') {
					resolve(response);
				} else {
					reject(new Error('Не удалось авторизироваться'));
				}
			}, 2);//1 | 2 | 4 | 8 | 16 | 128 | 256 | 1024 | 2048 | 8192 | 32768 | 65536 | 131072 | 262144 | 524288 | 1048576 | 4194304 | 134217728);
		} else {
			reject(new Error('Не удалось подключиться к API Vkontakte'));
		}
	});
}).then(() => {
	return new Promise((resolve, reject) => {
		if (VK) {
			VK.Api.call('users.get', {'v': '5.62', 'name_case': 'gen'}, response => {
				if (response.error) {
					reject(new Error(response.error.error_msg));
				} else {
					headerInfo.textContent = `Список друзей ${response.response[0].first_name} ${response.response[0].last_name}`;
					resolve();
				}
			});
		} else {
			reject(new Error('Не удалось подключиться к API Vkontakte'));
		}
	});
}).then(() => {
	return new Promise((resolve, reject) => {
		if (VK) {
			VK.Api.call('friends.get', {'v': '5.62', 'fields': 'bdate,photo_50,maiden_name'}, response => {
				if (response.error) {
					reject(new Error(response.error.error_msg));
				} else {
					let friends = [];
					response.response.items.forEach((item, i, arr) => {
						friends[i] = item;
						friends[i].number = i + 1;
						if (item.bdate) {
							let birthDate = item.bdate.split('.');
							if (birthDate[2]) {
								let bd = new Date(birthDate[2], birthDate[1] - 1, birthDate[0]);
								let now = new Date();
								friends[i].bdate = (bd.getDate() < 10 ? '0' : '') + bd.getDate() + '.' + (bd.getMonth() + 1 < 10 ? '0' : '') + (bd.getMonth() + 1) + '.' + bd.getFullYear();
								friends[i].age = parseInt((now - bd) / 3600 / 24 / 1000 / 365);
							} else {
								friends[i].bdate = (birthDate[0] < 10 ? '0' : '') + birthDate[0] + '.' + (birthDate[1] < 10 ? '0' : '') + birthDate[1];
							}
						}
					});
					function daysInMonth(month) {
						let days;
						switch (month) {
							case 3 :
							case 5 :
							case 7 :
							case 8 :
							case 10 :
							case 12 :
							case 1 : {
								days = 31;
								break;
							}
							case 2 : {
								if (month) {
									if (month % 4) {
										days = 28;
									} else {
										days = 29;
									}
								} else {
									days = 28;
								}
								break;
							}
							case 6 :
							case 9 :
							case 11 :
							case 4 : {
								days = 30;
								break;
							}
						}
						return days;
					}

					/*friends.sort((a, b) => {
						if(a.bdate && b.bdate) {
							let aBirthDate = a.bdate.split('.');
							let bBirthDate = b.bdate.split('.');
							let now = new Date();
							let aDays = daysInMonth(aBirthDate[1]);
							let bDays = daysInMonth(bBirthDate[1]);
							let aDate = aBirthDate[0] * 3600 * 1000 + (aBirthDate[1] - 1) * aDays * 3600 * 1000;
							let bDate = bBirthDate[0] * 3600 * 1000 + (bBirthDate[1] - 1) * bDays * 3600 * 1000;
							let nowDate = now.getDate() * 3600 * 1000 + (now.getMonth() - 1) * daysInMonth(now.getMonth()) * 3600 * 1000;
							if (aDate > nowDate && bDate > nowDate) {
								if (aDate < bDate) {
									return 1;
								} else {
									return -1;
								}
							} else {
								return -1;
							}
						}
						return 1;
					});*/
					let source   = friendsTamplate.innerHTML;
					let template = Handlebars.compile(source);
					let context = {
						list: friends
					};
					results.innerHTML  = template(context);
					resolve();
				}
			});
		} else {
			reject(new Error('Не удалось подключиться к API Vkontakte'));
		}
	});
}).catch(e => {
	alert(`Ошибка: ${e.message}`);
});