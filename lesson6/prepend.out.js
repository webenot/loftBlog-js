(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var prepend = function prepend(container, newElement) {
	if (arguments.length === 0) {
		throw new Error('Вы не передали никаких аргументов функции prepend');
	}
	if (container.nodeType !== 1 && container.nodeType !== 11) {
		throw new Error('Первый аргумент функции prepend должен быть контейнером DOM');
	}
	if (newElement.nodeType !== 1 && newElement.nodeType !== 3 && newElement.nodeType !== 4 && newElement.nodeType !== 5 && newElement.nodeType !== 6 && newElement.nodeType !== 8 && newElement.nodeType !== 11 && newElement.nodeType !== 12) {
		throw new Error('Первый аргумент функции prepend должен быть узлом DOM');
	}
	container.insertBefore(newElement, container.firstChild);
	return newElement;
};

module.exports = prepend;


},{}]},{},[1]);
