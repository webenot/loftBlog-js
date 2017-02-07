(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var reduce = function reduce(source, fn, initialValue) {
	if (typeof source === 'undefined') {
		throw new Error('Не передано первый параметр');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции reduce должен быть функцией');
	}
	var object = Object(source);
	var result = void 0,
	    key = 0,
	    length = object.length;
	if (typeof initialValue !== 'undefined') {
		result = initialValue;
	} else {
		while (key < length && !(key in object)) {
			//console.log(!(key in object));
			key++;
		}
		if (key >= length) {
			throw new TypeError('Массив пуст и не задан третий параметр');
		}
		result = object[key++];
	}
	while (key < length) {
		if (key in object) {
			result = fn(result, object[key], key, object);
		}

		key++;
	}
	return result;
};

module.exports = reduce;


},{}]},{},[1]);
