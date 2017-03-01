/**
 * Created by aquilla on 28.02.2017.
 */
let db = openDatabase('students', '1.0', 'students db', 2 * 1024 * 1024);

new Promise((resolve, reject) => {
	db.transaction(tx => {
		tx.executeSql('CREATE TABLE IF NOT EXISTS students (name, lastName)', [], resolve);
	});
}).then(() => {
	db.transaction(tx => {
		tx.executeSql('SELECT * FROM students', [], (tx, res) => {
			for (let i = 0; i < res.rows.length; i++) {
				let row = res.rows[i];

				addToList(row.name, row.lastName);
			}
		});
	});
	
	function onClick() {
		let name = nameField.value.trim(),
			lastName = lastNameField.value.trim();

		if (!name || !lastName) {
			throw new Error('ВВедите данные!');
		}

		addToList(name, lastName);
		nameField.value = '';
		lastNameField.value = '';
		saveToDB(name, lastName);
	}

	sendButton.addEventListener('click', onClick);
	clearButton.addEventListener('click', clearList);

	addForm.addEventListener('keyup', e => {
		if (e.keyCode === 13) {
			onClick();
		}
	});
});

function addToList(name, lastName) {
	let row = document.createElement('tr'),
		celName = document.createElement('td'),
		celLastName = document.createElement('td');

	celName.textContent = name;
	celLastName.textContent = lastName;

	row.appendChild(celName);
	row.appendChild(celLastName);

	studentsTable.appendChild(row);
}

function saveToDB(name, lastName) {
	db.transaction(tx => {
		tx.executeSql('INSERT INTO students (name, lastName) VALUES (\'' + name + '\', \'' + lastName + '\')', []);
	});
}

function clearList() {
	db.transaction(tx => {
		tx.executeSql('DELETE FROM students', []);
	});
	studentsTable.textContent = '';
}