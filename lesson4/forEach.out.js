(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _arguments = arguments;
var forEach = function forEach(source, fn) {
	if (_arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов');
	}
	for (var i = 0; i < 2; i++) {
		if (typeof _arguments[i] !== 'undefined') {
			var n = i + 1;
			throw new Error(n + 'й аргумент функции forEach не определен');
		}
	}
	if (!(source instanceof Array)) {
		throw new Error('Первый параметр функции forEach должен быть массивом');
	}
	if (typeof fn !== 'function') {
		throw new Error('Второй параметр функции forEach должен быть функцией');
	}
	for (var _i = 0; _i < source.length; _i++) {
		fn(source[_i]);
	}
	return 1;
};

module.exports = forEach;


},{}]},{},[1]);
