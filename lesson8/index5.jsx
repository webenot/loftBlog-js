/*
 ** Функция возвращат объект XMLHttpRequest
 */
function getXmlHttpRequest() {
	if (window.XMLHttpRequest) {
		try {
			return new XMLHttpRequest();
		}
		catch (e){}
	} else if (window.ActiveXObject) {
		try {
			return new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e){}
		try {
			return new ActiveXObject('Microsoft.XMLHTTP');
		}
		catch (e){}
	}
	return null;
}

function sendAjax(url, method, data) {
	return new Promise((resolve, reject) => {
		let xhr = getXmlHttpRequest();
		xhr.open(method, url);
		xhr.addEventListener('load', () => {
			resolve(xhr.responseText);
		});
		xhr.addEventListener('error', () => {
			reject();
		});
		xhr.send(data);
	});

}

let myButton = document.querySelector('#sendAjax');

myButton.addEventListener('click', function () {
	sendAjax('text.txt', 'GET', null).then(response => {
		console.log('Файл загружен', response);
		container.innerText = response;
		return response;
	}).then(res => {
		console.log('Получен ответ от сервера', res);
	});
});