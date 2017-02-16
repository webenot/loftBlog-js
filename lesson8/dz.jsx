let timer = require('./timer');

timer(3000).then(() => console.log('я вывелась через 3 секунды'));

let sendAjax = require('./ajax');

loadCities.addEventListener('click', (e) => {
	sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', 'GET', null, 'json')
		.then(response => {
			console.log('Файл загружен', response);

			let cities = [];
			response.forEach((item, i, arr) => {
				cities[i] = item.name;
			});
			return cities;
		}).then((response) => {
			response.sort();
			response.forEach((item, i ,arr) => {
				container.innerHTML += item + '<br>';
			});
		});
});