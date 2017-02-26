(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTEvZHoyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYXF1aWxsYSBvbiAyNS4wMi4yMDE3LlxyXG4gKi9cclxubmV3IFByb21pc2UocmVzb2x2ZSA9PntcclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0cmVzb2x2ZSgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cub25sb2FkID0gcmVzb2x2ZTtcclxuXHR9XHJcbn0pLnRoZW4oKCkgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRpZiAoVkspIHtcclxuXHRcdFx0VksuaW5pdCh7XHJcblx0XHRcdFx0YXBpSWQ6IDU4ODM4NjBcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRWSy5BdXRoLmxvZ2luKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09ICdjb25uZWN0ZWQnKSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDRgtGM0YHRjycpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDIpOy8vMSB8IDIgfCA0IHwgOCB8IDE2IHwgMTI4IHwgMjU2IHwgMTAyNCB8IDIwNDggfCA4MTkyIHwgMzI3NjggfCA2NTUzNiB8IDEzMTA3MiB8IDI2MjE0NCB8IDUyNDI4OCB8IDEwNDg1NzYgfCA0MTk0MzA0IHwgMTM0MjE3NzI4KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlamVjdChuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC00LrQu9GO0YfQuNGC0YzRgdGPINC6IEFQSSBWa29udGFrdGUnKSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pLnRoZW4oKCkgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRpZiAoVkspIHtcclxuXHRcdFx0VksuQXBpLmNhbGwoJ3VzZXJzLmdldCcsIHsndic6ICc1LjYyJywgJ25hbWVfY2FzZSc6ICdnZW4nfSwgcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5lcnJvcikge1xyXG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5lcnJvci5lcnJvcl9tc2cpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aGVhZGVySW5mby50ZXh0Q29udGVudCA9IGDQodC/0LjRgdC+0Log0LTRgNGD0LfQtdC5ICR7cmVzcG9uc2UucmVzcG9uc2VbMF0uZmlyc3RfbmFtZX0gJHtyZXNwb25zZS5yZXNwb25zZVswXS5sYXN0X25hbWV9YDtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVqZWN0KG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LTQutC70Y7Rh9C40YLRjNGB0Y8g0LogQVBJIFZrb250YWt0ZScpKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkudGhlbigoKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGlmIChWSykge1xyXG5cdFx0XHRWSy5BcGkuY2FsbCgnZnJpZW5kcy5nZXQnLCB7J3YnOiAnNS42MicsICdmaWVsZHMnOiAnYmRhdGUscGhvdG9fNTAsbWFpZGVuX25hbWUnfSwgcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5lcnJvcikge1xyXG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5lcnJvci5lcnJvcl9tc2cpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGV0IGZyaWVuZHMgPSBbXTtcclxuXHRcdFx0XHRcdHJlc3BvbnNlLnJlc3BvbnNlLml0ZW1zLmZvckVhY2goKGl0ZW0sIGksIGFycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRmcmllbmRzW2ldID0gaXRlbTtcclxuXHRcdFx0XHRcdFx0ZnJpZW5kc1tpXS5udW1iZXIgPSBpICsgMTtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uYmRhdGUpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYmlydGhEYXRlID0gaXRlbS5iZGF0ZS5zcGxpdCgnLicpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChiaXJ0aERhdGVbMl0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBiZCA9IG5ldyBEYXRlKGJpcnRoRGF0ZVsyXSwgYmlydGhEYXRlWzFdIC0gMSwgYmlydGhEYXRlWzBdKTtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJpZW5kc1tpXS5iZGF0ZSA9IChiZC5nZXREYXRlKCkgPCAxMCA/ICcwJyA6ICcnKSArIGJkLmdldERhdGUoKSArICcuJyArIChiZC5nZXRNb250aCgpICsgMSA8IDEwID8gJzAnIDogJycpICsgKGJkLmdldE1vbnRoKCkgKyAxKSArICcuJyArIGJkLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmcmllbmRzW2ldLmFnZSA9IHBhcnNlSW50KChub3cgLSBiZCkgLyAzNjAwIC8gMjQgLyAxMDAwIC8gMzY1KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJpZW5kc1tpXS5iZGF0ZSA9IChiaXJ0aERhdGVbMF0gPCAxMCA/ICcwJyA6ICcnKSArIGJpcnRoRGF0ZVswXSArICcuJyArIChiaXJ0aERhdGVbMV0gPCAxMCA/ICcwJyA6ICcnKSArIGJpcnRoRGF0ZVsxXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gZGF5c0luTW9udGgobW9udGgpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRheXM7XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAobW9udGgpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlIDMgOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgNSA6XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSA3IDpcclxuXHRcdFx0XHRcdFx0XHRjYXNlIDggOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgMTAgOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgMTIgOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgMSA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdGRheXMgPSAzMTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjYXNlIDIgOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobW9udGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG1vbnRoICUgNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRheXMgPSAyODtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXlzID0gMjk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRheXMgPSAyODtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjYXNlIDYgOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgOSA6XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAxMSA6XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSA0IDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5cyA9IDMwO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYXlzO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qZnJpZW5kcy5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGEuYmRhdGUgJiYgYi5iZGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBhQmlydGhEYXRlID0gYS5iZGF0ZS5zcGxpdCgnLicpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBiQmlydGhEYXRlID0gYi5iZGF0ZS5zcGxpdCgnLicpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBhRGF5cyA9IGRheXNJbk1vbnRoKGFCaXJ0aERhdGVbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBiRGF5cyA9IGRheXNJbk1vbnRoKGJCaXJ0aERhdGVbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBhRGF0ZSA9IGFCaXJ0aERhdGVbMF0gKiAzNjAwICogMTAwMCArIChhQmlydGhEYXRlWzFdIC0gMSkgKiBhRGF5cyAqIDM2MDAgKiAxMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBiRGF0ZSA9IGJCaXJ0aERhdGVbMF0gKiAzNjAwICogMTAwMCArIChiQmlydGhEYXRlWzFdIC0gMSkgKiBiRGF5cyAqIDM2MDAgKiAxMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBub3dEYXRlID0gbm93LmdldERhdGUoKSAqIDM2MDAgKiAxMDAwICsgKG5vdy5nZXRNb250aCgpIC0gMSkgKiBkYXlzSW5Nb250aChub3cuZ2V0TW9udGgoKSkgKiAzNjAwICogMTAwMDtcclxuXHRcdFx0XHRcdFx0XHRpZiAoYURhdGUgPiBub3dEYXRlICYmIGJEYXRlID4gbm93RGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGFEYXRlIDwgYkRhdGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHR9KTsqL1xyXG5cdFx0XHRcdFx0bGV0IHNvdXJjZSAgID0gZnJpZW5kc1RhbXBsYXRlLmlubmVySFRNTDtcclxuXHRcdFx0XHRcdGxldCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xyXG5cdFx0XHRcdFx0bGV0IGNvbnRleHQgPSB7XHJcblx0XHRcdFx0XHRcdGxpc3Q6IGZyaWVuZHNcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZXN1bHRzLmlubmVySFRNTCAgPSB0ZW1wbGF0ZShjb250ZXh0KTtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVqZWN0KG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LTQutC70Y7Rh9C40YLRjNGB0Y8g0LogQVBJIFZrb250YWt0ZScpKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkuY2F0Y2goZSA9PiB7XHJcblx0YWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlLm1lc3NhZ2V9YCk7XHJcbn0pOyJdfQ==
