(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var slice = function slice() {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof arguments[i] !== 'undefined') {
			var n = i + 1;
			throw new Error(n + 'й аргумент функции slice не определен');
		}
	}
	if (!(arguments[0] instanceof Array)) {
		throw new Error('Первый параметр функции slice должен быть массивом');
	}
	if (typeof arguments[1] !== 'number') {
		throw new Error('Второй параметр функции slice должен быть числом');
	}
	var out = [],
	    j = 0,
	    array = arguments[0];
	var begin = arguments[1] < 0 ? array.length + parseInt(arguments[1]) : parseInt(arguments[1]) - 1;

	var end = typeof arguments[2] !== 'undefined' ? parseInt(arguments[2]) - 1 : array.length - 1;

	for (var _i = begin; _i < end; _i++) {
		out[j] = array[_i];
		j++;
	}

	return out;
};

module.exports = slice;


},{}]},{},[1]);
