let sendAjax = require('./ajax');

sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', 'GET', 'json')
	.then(response => {
		let cities = [];
		response.forEach((item, i, arr) => {
			cities[i] = item.name;
		});
		return cities;
	}).then(response => {
		response.sort();
		return response;
	}).then(response => {
		myInput.addEventListener('input', e => {
			container.innerHTML = '';
			let curValue = e.target.value;
			if(curValue === '') return;
			response.filter(item => {
				if (item.toLocaleLowerCase().startsWith(curValue)) {
					container.innerHTML += item + '<br>';
				}
				return item;
			});
		});
	});
