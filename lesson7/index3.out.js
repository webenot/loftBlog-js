(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var myInput = document.getElementById('myInput');
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
myInput.addEventListener('keydown', function (e) {
	return console.log(e.type, e);
});
myInput.addEventListener('keyup', function (e) {
	return console.log(e.type, e);
});
myInput.addEventListener('keypress', function (e) {
	return console.log(e.type, e);
});
myInput.addEventListener('input', function (e) {
	return console.log(e.type, e);
}); // Срабатывает, когда происходит любое изменение содержимого инпута


},{}]},{},[1]);
