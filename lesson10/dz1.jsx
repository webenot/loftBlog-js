let cook = document.cookie;
let table = document.querySelector('#table tbody');

/*

let cookieDate = new Date();
cookieDate.setFullYear(cookieDate.getFullYear() + 1);

document.cookie = 'myCookie=cookieValue; expires=' + cookieDate.toUTCString();*/

if(cook) {
	let cookiesArray = cook.split('; ');

	cookiesArray.forEach((item, index, arr) => {
		let cookie = item.split('=');
		arr[index] = cookie;
		let newRow = document.createElement('tr');
		newRow.id = cookie[0] + '-row';
		newRow.innerHTML = `<td>${cookie[0]}</td><td>${cookie[1]}</td><td><button id="${cookie[0]}" class="btn btn-danger delete-cookie">Удалить куку</button></td>`;
		table.appendChild(newRow);
	});

	table.addEventListener('click', (e) => {
		if (e.target.tagName == 'BUTTON') {
			if (confirm('Удалить cookie с именем ' + e.target.id + '?')) {
				let date = new Date();
				date.setFullYear(date.getFullYear() - 1);
				document.cookie = `${e.target.id}=deleted; expires=${date.toUTCString()}`;
				table.removeChild(document.getElementById(e.target.id + '-row'));
			}
		}
	});
}