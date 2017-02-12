let myInput = document.getElementById('myInput');
/*
myInput.addEventListener('keydown', e => console.log(e.type, e));
myInput.addEventListener('keyup', e => console.log(e.type, e));
myInput.addEventListener('keypress', e => console.log(e.type, e)); // срабатывает, если срабатывает добавление элемента + Enter
*/
/*

myInput.addEventListener('keydown', e => {
	//console.log(e.keyCode);
	if ( e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39 && (e.keyCode <= 48 || e.keyCode >= 57) && (e.keyCode <= 96 || e.keyCode >= 105)) {
		e.preventDefault();
	}
});
*/
myInput.addEventListener('keydown', e => console.log(e.type, e));
myInput.addEventListener('keyup', e => console.log(e.type, e));
myInput.addEventListener('keypress', e => console.log(e.type, e));
myInput.addEventListener('input', e => console.log(e.type, e)); // Срабатывает, когда происходит любое изменение содержимого инпута
