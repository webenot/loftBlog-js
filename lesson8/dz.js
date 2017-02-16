'use strict';

var timer = require('./timer');

timer(3000).then(function () {
	return console.log('я вывелась через 3 секунды');
});

var sendAjax = require('./ajax');

loadCities.addEventListener('click', function (e) {
	sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', 'GET', null, 'json').then(function (response) {
		console.log('Файл загружен', response);

		var cities = [];
		response.forEach(function (item, i, arr) {
			cities[i] = item.name;
		});
		return cities;
	}).then(function (response) {
		response.sort();
		response.forEach(function (item, i, arr) {
			container.innerHTML += item + '<br>';
		});
	});
});

//# sourceMappingURL=dz.js.map