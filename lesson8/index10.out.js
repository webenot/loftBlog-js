(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by aquilla on 15.02.2017.
 */

myButton.addEventListener('click', () => {
	/*let res = jQuery.get('text.txt', data => {
		console.log(data);
	});
	console.log(res);*/
	//jQuery('#container').load('text.txt');
	/*jQuery.ajax({
		url: 'text.txt',
		success: data => console.log(data)

	});*/
	//jQuery.get('text.txt').then(data => console.log(data));
	//jQuery.get('text.txt').done(data => console.log(data));
	//jQuery.get('text.txt').fail(data => console.log(data));
	jQuery.get('text.txt').done(data => console.log(data)).fail(data => console.log('Error'));
});
},{}]},{},[1]);
