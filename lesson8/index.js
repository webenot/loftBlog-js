'use strict';

// основной поток кода
console.log('!!!!');
var myButton = document.querySelector('#myButton');
myButton.addEventListener('click', function () {
	setTimeout(function () {
		console.log('таймер!');
	}, 1);
	console.time('деление');
	for (var i = 1; i < 2000000000; i++) {
		var a = i / i;
	}
	console.timeEnd('деление');
});

//# sourceMappingURL=index.js.map