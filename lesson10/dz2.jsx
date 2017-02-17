let makeTable = (array, table) => {
	let newRow = document.createElement('tr');
	newRow.id = array[0] + '-row';
	newRow.innerHTML = `<td>${array[0]}</td><td>${array[1]}</td><td><button id="${array[0]}" class="btn btn-danger btn-block">Удалить куку</button></td>`;
	table.appendChild(newRow);
};

let deleteCookie = (node, table) => {
	if (node.tagName == 'BUTTON') {
		if (confirm('Удалить cookie с именем ' + node.id + '?')) {
			let date = new Date();
			date.setFullYear(date.getFullYear() - 1);
			document.cookie = `${node.id}=deleted; expires=${date.toUTCString()}`;
			table.removeChild(document.getElementById(node.id + '-row'));
		}
	}
};

let cook = document.cookie;
let table = document.querySelector('#table tbody');

let cookiesArray = cook.split('; ');


if (cook) {
	cookiesArray.forEach((item, index, arr) => {
		let cookie = item.split('=');
		arr[index] = cookie;
		makeTable(cookie, table);
	});
}

table.addEventListener('click', (e) => {
	deleteCookie(e.target, table);
});

let form = document.querySelector('#addCookie');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	if(e.target.cookieName.value) {
		let expires = new Date();
		expires = expires.setDate(expires.getDate() + parseInt(e.target.cookieExpires.value));
		document.cookie = `${e.target.cookieName.value}=${e.target.cookieValue.value}; expires=${expires}`;
		makeTable([e.target.cookieName.value, e.target.cookieValue.value], table);
	}
	e.target.reset();
	console.dir(e.target.cookieName.value);
});