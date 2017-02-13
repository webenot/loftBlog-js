(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var link = jQuery('#myLink');
var cb1 = function cb1() {
	alert('Click');
	return false;
};
var cb2 = function cb2() {
	alert('Click 2');
	return false;
};
link.on('click', cb1);
link.on('click', cb2);
link.off('click', cb1);
//link.off('click');


},{}]},{},[1]);
