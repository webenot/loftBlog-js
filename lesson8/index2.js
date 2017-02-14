'use strict';

var url1 = 'https://s-media-cache-ak0.pinimg.com/originals/70/af/5f/70af5fc85b63b4f54c90cace00fcecf6.jpg',
    url2 = 'http://www.unoosa.org/res/timeline/index_html/space-2.jpg',
    url3 = 'https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg';

var image = new Image();

document.body.appendChild(image);

image.src = url1;

image.addEventListener('load', function (e) {
	console.log('Картинка 1 загружена');
	var image = new Image();

	document.body.appendChild(image);
	image.src = url2;

	image.addEventListener('load', function (e) {
		console.log('Картинка 2 загружена');
		var image = new Image();

		document.body.appendChild(image);
		image.src = url3;

		image.addEventListener('load', function (e) {
			console.log('Картинка 3 загружена');
		});
	});
});

//# sourceMappingURL=index2.js.map