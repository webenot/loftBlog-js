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

function sendAjax(url, method, responseType, data, async, user, pass) {
	return new Promise((resolve, reject) => {
		method = method || 'GET';
		responseType = responseType || 'text';
		async = async || true;
		user = user || null;
		pass = pass || null;

		let xhr = getXmlHttpRequest();
		xhr.open(method, url, async, user, pass);
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

module.exports = sendAjax;