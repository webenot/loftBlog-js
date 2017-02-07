(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var splice = function splice() {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			var n = i + 1;
			throw new Error(n + 'й аргумент функции splice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции splice должен быть массивом');
	}
	if (typeof arguments[1] !== 'number') {
		throw new Error('Второй параметр функции splice должен быть числом');
	}

	var out = [],
	    array = arguments[0];
	var begin = parseInt(arguments[1]);
	var end = typeof arguments[2] !== 'undefined' ? parseInt(arguments[2]) : array.length;

	var arr = [];
	for (var _i = 3, k = 0; _i < arguments.length; _i++, k++) {
		arr[k] = arguments[_i];
	}

	for (var _i2 = 0; _i2 < begin; _i2++) {
		out[_i2] = array[_i2];
	}

	if (arr.length > 0) {
		for (var _i3 = begin, _k = 0; _k < arr.length; _i3++, _k++) {
			out[_i3] = arr[_k];
		}
	}

	for (var _i4 = end + begin, _k2 = out.length; _i4 < array.length; _i4++, _k2++) {
		out[_k2] = array[_i4];
	}

	return out;
};

module.exports = splice;


},{}]},{},[1]);
