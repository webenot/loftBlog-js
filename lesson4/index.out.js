(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 1000
};
/*
console.log(obj1.lastName);
console.log(obj1['lastName']);
console.log(obj1[1]); // нельзя - будет undefined*/

/*let key = 'lastName';
console.log(obj1[key]);
console.log(obj1.key); // нельзя - будет undefined*/

//obj1.lastName = '!!!!!!!!!'; // можно так obj1['lastName'] = '!!!!!!!'

/*
delete obj1.lastName; // можно delete obj1['lastName']
console.log(obj1);
*/

/*
for (let prop in obj1) {
	//console.log(prop);
	console.log(obj1[prop]);
	console.log(obj1.prop); // нельзя - будет undefined
}*/

// неправильно
/*
if(!obj1.old) {
	console.log('Свойства old НЕТ в обьекте');
}*/
/*
if(obj1.hasOwnProperty('old')) {
	console.log('Свойство old ЕСТЬ в обьекте');
} else {
	console.log('Свойства old НЕТ в обьекте');
}*/

//console.log(Object.keys(obj1)); // метод статический

/*
let keys = Object.keys(obj1);

for (let i = 0; i < keys.length; i++) {
	//console.log(keys[i]);
	//console.log(obj1[keys[i]]);
	let key = keys[i];
	console.log(obj1[key]);
}*/

Object.keys(obj1).forEach(function (key) {
	return console.log(obj1[key]);
});


},{}]},{},[1]);
