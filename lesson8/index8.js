'use strict';

getData.addEventListener('click', function () {
	var jsonScript = document.createElement('script');
	document.head.appendChild(jsonScript);
	jsonScript.onload = jsonScript.onerror = function () {
		//jsonScript.parentNode.removeChild(jsonScript);
	};
	jsonScript.src = 'http://localhost:7777?method=updateData';
});

var updateData = function updateData(data) {
	dataField.value = data.join(', ');
};

//# sourceMappingURL=index8.js.map