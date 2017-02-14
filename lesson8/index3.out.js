(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let url1 = 'https://s-media-cache-ak0.pinimg.com/originals/70/af/5f/70af5fc85b63b4f54c90cace00fcecf6.jpg',
	url2 = 'http://www.unoosa.org/res/timeline/index_html/space-2.jpg',
	url3 = 'https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg';

/*
 let image = new Image();

 document.body.appendChild(image);

 image.src = url1;

 image.addEventListener('load', function (e) {
 console.log('Картинка 1 загружена');
 let image = new Image();

 document.body.appendChild(image);
 image.src = url2;

 image.addEventListener('load', function (e) {
 console.log('Картинка 2 загружена');
 let image = new Image();

 document.body.appendChild(image);
 image.src = url3;

 image.addEventListener('load', function (e) {
 console.log('Картинка 3 загружена');
 });
 });
 });*/

/**
 * Промисы
 * @param url
 * @return {Promise}
 */
// waiting/pending - ожидание, fullfilled/resolved - задача выполнена успешно, rejected - выполнено с ошибкой

function loadImage(url) {
	return new Promise((resolve, reject) => {
		console.log('Мы внутри промиса');
		let i = new Image();
		document.body.appendChild(i);
		i.src = url;
		i.addEventListener('load', () => resolve());
		i.addEventListener('error', () => reject());
	});
}

let p = loadImage(url1);

p.then(() => {
	console.log('Картинка 1 загружена успешно');
	return loadImage(url2);
}, () => {
	console.log('С ошибкой');
})
	.then(() => {
		console.log('Картинка 2 загружена успешно');
		return loadImage(url3);
	}, () => {
		console.log('С ошибкой');
	})
	.then(() => {
		console.log('Картинка 3 загружена успешно');
	}, () => {
		console.log('С ошибкой');
	});
},{}]},{},[1]);
