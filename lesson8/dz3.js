'use strict';

var sendAjax = require('./ajax');

sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', 'GET', 'json').then(function (response) {
	var cities = [];
	response.forEach(function (item, i, arr) {
		cities[i] = item.name;
	});
	return cities.sort();
}).then(function (response) {
	myInput.addEventListener('input', function (e) {
		container.innerHTML = '';
		var curValue = e.target.value;
		if (curValue === '') return;
		response.filter(function (item) {
			if (item.toLocaleLowerCase().startsWith(curValue)) {
				container.innerHTML += item + '<br>';
			}
			return item;
		});
	});
});

//# sourceMappingURL=dz3.js.map