// основной поток кода
console.log('!!!!');
let myButton = document.querySelector('#myButton');
myButton.addEventListener('click', () => {
	setTimeout(() => {
		console.log('таймер!');
	}, 1);
	console.time('деление');
	for (let i = 1; i < 2000000000; i++) {
		let a = i / i;
	}
	console.timeEnd('деление');
});
