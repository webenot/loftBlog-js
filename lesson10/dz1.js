'use strict';

var cook = document.cookie;
var table = document.querySelector('#table tbody');

/*

let cookieDate = new Date();
cookieDate.setFullYear(cookieDate.getFullYear() + 1);

document.cookie = 'myCookie=cookieValue; expires=' + cookieDate.toUTCString();*/

if (cook) {
	var cookiesArray = cook.split('; ');

	cookiesArray.forEach(function (item, index, arr) {
		var cookie = item.split('=');
		arr[index] = cookie;
		var newRow = document.createElement('tr');
		newRow.id = cookie[0] + '-row';
		newRow.innerHTML = '<td>' + cookie[0] + '</td><td>' + cookie[1] + '</td><td><button id="' + cookie[0] + '" class="btn btn-danger delete-cookie">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0443\u043A\u0443</button></td>';
		table.appendChild(newRow);
	});

	table.addEventListener('click', function (e) {
		if (e.target.tagName == 'BUTTON') {
			if (confirm('Удалить cookie с именем ' + e.target.id + '?')) {
				var date = new Date();
				date.setFullYear(date.getFullYear() - 1);
				document.cookie = e.target.id + '=deleted; expires=' + date.toUTCString();
				table.removeChild(document.getElementById(e.target.id + '-row'));
			}
		}
	});
}

//# sourceMappingURL=dz1.js.map