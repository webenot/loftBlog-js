(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// http://localhost:300/some/path?q1=1&q2=2#someHash

/*let date = new Date('2017/02/20');
console.log(date.toUTCString());

let dateEnd = new Date('2017/02/16');

document.cookie = 'cookieName=cookieValue; path=/loftBlog-js/lesson10; expires=' + date.toUTCString();
document.cookie = 'cookieName=cookieValue; path=/loftBlog-js/lesson10; expires=' + dateEnd.toUTCString();

let timeout = setTimeout(() => console.log('!!!'), 1000);
console.log(timeout);
clearTimeout(timeout);

let interval = setInterval(() => console.log('timeInterval'), 3000);
console.log(interval);
clearInterval(interval);

alert('!!!');
let human = confirm('Are you human?');
console.log(human);*/

let data = prompt('Enter data');
console.log(data);
},{}]},{},[1]);
