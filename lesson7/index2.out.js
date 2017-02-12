(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var list = document.getElementById('list');
/*
for (let item of list.children) {
	item.addEventListener('click', e => console.log(`Кликнули на ${e.target.attributes['my-attr'].value}`));
}*/
list.addEventListener('click', function (e) {
	return console.log('\u041A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 ' + e.target.getAttribute('my-attr'), e.target);
});


},{}]},{},[1]);
