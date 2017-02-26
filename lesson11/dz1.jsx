let sendAjax = require('./ajax');

sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', 'GET', 'json')
	.then(response => {
		let cities = [];
		response.forEach((item, i, arr) => {
			cities[i] = item.name;
		});
		cities.sort();
		let result = [];
		cities.forEach((item, i ,arr) => {
			result[i] = {
				name: item
			}
		});
		return result;
	}).then(response => {
		if (response) {
			let source = citiesTamplate.innerHTML;
			let template = Handlebars.compile(source);
			let context = {
				list: response
			};
			results.innerHTML = template(context);
		}
		return response;
	}).then(response => {
		myInput.addEventListener('input', e => {
			let source = citiesTamplate.innerHTML;
			let template = Handlebars.compile(source);
			let curValue = e.target.value;
			let context;
			if (curValue === '') {
				context = {
					list: response
				};
				results.innerHTML = template(context);
				return;
			}
			let result = [], j = 0;
			response.forEach(item => {
				let temp = item.name.toLocaleLowerCase();
				if (!temp.includes(curValue)) {
					result[j] = item;
					j++;
				}
			});
			context = {
				list: result
			};
			results.innerHTML = template(context);
		});
	}).catch(e => {
		alert(`Ошибка: ${e.message}`);
	});
