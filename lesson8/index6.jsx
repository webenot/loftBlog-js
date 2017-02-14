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

function sendAjax(url, method, data, responseType) {
	return new Promise((resolve, reject) => {
		let xhr = getXmlHttpRequest();
		xhr.open(method, url);
		xhr.responseType = responseType;
		xhr.addEventListener('load', () => {
			resolve(xhr.response);
		});
		xhr.addEventListener('error', () => {
			reject();
		});
		xhr.send(data);
	});

}

let myButton = document.querySelector('#sendAjax');

myButton.addEventListener('click', function () {
	sendAjax('list.json', 'GET', null, 'json').then(response => {
		//let result = JSON.parse(response);
		console.log('Файл загружен', response);
		//container.innerText = response;
		for ({name} of response) {
			let div = document.createElement('div');
			div.innerText = name;
			container.appendChild(div);
		}
		return response;
	}).then(res => {
		console.log('Получен ответ от сервера');
	});
});