(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvZGF0YWJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBhcXVpbGxhIG9uIDI4LjAyLjIwMTcuXHJcbiAqL1xyXG5sZXQgZGIgPSBvcGVuRGF0YWJhc2UoJ3N0dWRlbnRzJywgJzEuMCcsICdzdHVkZW50cyBkYicsIDIgKiAxMDI0ICogMTAyNCk7XHJcblxyXG5uZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0ZGIudHJhbnNhY3Rpb24odHggPT4ge1xyXG5cdFx0dHguZXhlY3V0ZVNxbCgnQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgc3R1ZGVudHMgKG5hbWUsIGxhc3ROYW1lKScsIFtdLCByZXNvbHZlKTtcclxuXHR9KTtcclxufSkudGhlbigoKSA9PiB7XHJcblx0ZGIudHJhbnNhY3Rpb24odHggPT4ge1xyXG5cdFx0dHguZXhlY3V0ZVNxbCgnU0VMRUNUICogRlJPTSBzdHVkZW50cycsIFtdLCAodHgsIHJlcykgPT4ge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IHJvdyA9IHJlcy5yb3dzW2ldO1xyXG5cclxuXHRcdFx0XHRhZGRUb0xpc3Qocm93Lm5hbWUsIHJvdy5sYXN0TmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcblx0XHRsZXQgbmFtZSA9IG5hbWVGaWVsZC52YWx1ZS50cmltKCksXHJcblx0XHRcdGxhc3ROYW1lID0gbGFzdE5hbWVGaWVsZC52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0aWYgKCFuYW1lIHx8ICFsYXN0TmFtZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ9CS0JLQtdC00LjRgtC1INC00LDQvdC90YvQtSEnKTtcclxuXHRcdH1cclxuXHJcblx0XHRhZGRUb0xpc3QobmFtZSwgbGFzdE5hbWUpO1xyXG5cdFx0bmFtZUZpZWxkLnZhbHVlID0gJyc7XHJcblx0XHRsYXN0TmFtZUZpZWxkLnZhbHVlID0gJyc7XHJcblx0XHRzYXZlVG9EQihuYW1lLCBsYXN0TmFtZSk7XHJcblx0fVxyXG5cclxuXHRzZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XHJcblx0Y2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckxpc3QpO1xyXG5cclxuXHRhZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0XHRvbkNsaWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9MaXN0KG5hbWUsIGxhc3ROYW1lKSB7XHJcblx0bGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyksXHJcblx0XHRjZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSxcclxuXHRcdGNlbExhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcblx0Y2VsTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblx0Y2VsTGFzdE5hbWUudGV4dENvbnRlbnQgPSBsYXN0TmFtZTtcclxuXHJcblx0cm93LmFwcGVuZENoaWxkKGNlbE5hbWUpO1xyXG5cdHJvdy5hcHBlbmRDaGlsZChjZWxMYXN0TmFtZSk7XHJcblxyXG5cdHN0dWRlbnRzVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvREIobmFtZSwgbGFzdE5hbWUpIHtcclxuXHRkYi50cmFuc2FjdGlvbih0eCA9PiB7XHJcblx0XHR0eC5leGVjdXRlU3FsKCdJTlNFUlQgSU5UTyBzdHVkZW50cyAobmFtZSwgbGFzdE5hbWUpIFZBTFVFUyAoXFwnJyArIG5hbWUgKyAnXFwnLCBcXCcnICsgbGFzdE5hbWUgKyAnXFwnKScsIFtdKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJMaXN0KCkge1xyXG5cdGRiLnRyYW5zYWN0aW9uKHR4ID0+IHtcclxuXHRcdHR4LmV4ZWN1dGVTcWwoJ0RFTEVURSBGUk9NIHN0dWRlbnRzJywgW10pO1xyXG5cdH0pO1xyXG5cdHN0dWRlbnRzVGFibGUudGV4dENvbnRlbnQgPSAnJztcclxufSJdfQ==
