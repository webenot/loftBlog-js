(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var deleteTextNodes = function deleteTextNodes(source) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции deleteTextNodes');
	}
	if (typeof source === 'undefined') {
		return source;
	}
	if (typeof source.childNodes === 'undefined') {
		return source;
	}
	if (typeof source.nodeType === 'undefined') {
		return source;
	}
	if (source.childNodes.length === 0) {
		return source;
	}
	var indexes = [];
	for (var i = 0; i < source.childNodes.length; i++) {
		if (source.childNodes[i].nodeType === 3) {
			indexes.push(i);
		}
	}
	for (var _i = 0; _i < indexes.length; _i++) {
		source.removeChild(source.childNodes[indexes[_i] - _i]);
	}
	for (var _i2 = 0; _i2 < source.childNodes.length; _i2++) {
		deleteTextNodes(source.childNodes[_i2]);
	}

	return source;
};

module.exports = deleteTextNodes;


},{}]},{},[1]);
