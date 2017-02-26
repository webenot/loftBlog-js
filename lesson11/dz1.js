'use strict';

var sendAjax = require('./ajax');

sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', 'GET', 'json').then(function (response) {
	var cities = [];
	response.forEach(function (item, i, arr) {
		cities[i] = item.name;
	});
	cities.sort();
	var result = [];
	cities.forEach(function (item, i, arr) {
		result[i] = {
			name: item
		};
	});
	return result;
}).then(function (response) {
	if (response) {
		var source = citiesTamplate.innerHTML;
		var template = Handlebars.compile(source);
		var context = {
			list: response
		};
		results.innerHTML = template(context);
	}
	return response;
}).then(function (response) {
	myInput.addEventListener('input', function (e) {
		var source = citiesTamplate.innerHTML;
		var template = Handlebars.compile(source);
		var curValue = e.target.value;
		var context = void 0;
		if (curValue === '') {
			context = {
				list: response
			};
			results.innerHTML = template(context);
			return;
		}
		var result = [],
		    j = 0;
		response.forEach(function (item) {
			var temp = item.name.toLocaleLowerCase();
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
}).catch(function (e) {
	alert('\u041E\u0448\u0438\u0431\u043A\u0430: ' + e.message);
});

//# sourceMappingURL=dz1.js.map