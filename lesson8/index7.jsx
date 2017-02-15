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

let xhr = getXmlHttpRequest();

xhr.open('POST', 'http://localhost:7777', true);
xhr.responseType = 'json';
xhr.onloadend = () => {
	console.log(xhr.response);
};

xhr.send(JSON.stringify({q: 1, w: 'data'}));