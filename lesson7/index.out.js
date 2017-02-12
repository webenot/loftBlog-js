(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var myLink = document.getElementById('myLink');

var handler = function handler(e) {
	console.log(e);
	//e.stopPropagation();
	//e.stopImmediatePropagation();
	//e.cancelBubble = true;
	e.preventDefault();
	//alert(e.type);
};
var handler2 = function handler2(e) {
	return alert('второй обработчик');
};

//myLink.addEventListener('click', handler);
myLink.addEventListener('click', handler, true);
//myLink.addEventListener('click', handler2);
//myLink.removeEventListener('click', handler);

var container = document.querySelector('#container');
var cb1 = function cb1(e) {
	return alert('Первый обработчик');
};

var offsetX = 0,
    offsetY = 0;
var activeElement = void 0;

var mDown = function mDown(e) {
	console.log('Нажали кнопку мыши', e);
	activeElement = e.target;
	if (e.hasOwnProperty('offsetX')) {
		offsetX = e.offsetX;
	} else {
		offsetX = e.pageX;
	}
	if (e.hasOwnProperty('offsetY')) {
		offsetY = e.offsetY;
	} else {
		offsetY = e.pageY;
	}
};
var mUp = function mUp(e) {
	console.log('Отпустили кнопку мыши', e);
	activeElement = null;
};
var mMove = function mMove(e) {
	//console.log('Двигаем курсор', e);
	if (activeElement) {
		activeElement.style.top = e.clientY - offsetY + 'px';
		activeElement.style.left = e.clientX - offsetX + 'px';
	}
};

//container.addEventListener('click', cb1);
container.addEventListener('mousedown', mDown);
container.addEventListener('mouseup', mUp);
document.addEventListener('mousemove', mMove);


},{}]},{},[1]);
