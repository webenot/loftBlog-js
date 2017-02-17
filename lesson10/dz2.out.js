(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var makeTable = function makeTable(array, table) {
	var newRow = document.createElement('tr');
	newRow.id = array[0] + '-row';
	newRow.innerHTML = '<td>' + array[0] + '</td><td>' + array[1] + '</td><td><button id="' + array[0] + '" class="btn btn-danger btn-block">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0443\u043A\u0443</button></td>';
	table.appendChild(newRow);
};

var deleteCookie = function deleteCookie(node, table) {
	if (node.tagName == 'BUTTON') {
		if (confirm('Удалить cookie с именем ' + node.id + '?')) {
			var date = new Date();
			date.setFullYear(date.getFullYear() - 1);
			document.cookie = node.id + '=deleted; expires=' + date.toUTCString();
			table.removeChild(document.getElementById(node.id + '-row'));
		}
	}
};

var cook = document.cookie;
var table = document.querySelector('#table tbody');

var cookiesArray = cook.split('; ');

if (cook) {
	cookiesArray.forEach(function (item, index, arr) {
		var cookie = item.split('=');
		arr[index] = cookie;
		makeTable(cookie, table);
	});
}

table.addEventListener('click', function (e) {
	deleteCookie(e.target, table);
});

var form = document.querySelector('#addCookie');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (e.target.cookieName.value) {
		var expires = new Date();
		expires = expires.setDate(expires.getDate() + parseInt(e.target.cookieExpires.value));
		document.cookie = e.target.cookieName.value + '=' + e.target.cookieValue.value + '; expires=' + expires;
		makeTable([e.target.cookieName.value, e.target.cookieValue.value], table);
	}
	e.target.reset();
	console.dir(e.target.cookieName.value);
});


},{}]},{},[1]);
