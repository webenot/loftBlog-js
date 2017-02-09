(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//let el1 = document.getElementById('i1');
//console.log(el1.constructor);
//let el2 = document.getElementsByName('input1');
//console.log(el2.constructor);
//let el3 = document.getElementsByClassName('c1');
//console.log(el3.constructor);
//let el4 = document.getElementsByTagName('div');
//console.log(el4.constructor);
//let el5 = document.querySelector('input[type="text"]');
//console.log(el5.constructor);
//let el6 = document.querySelectorAll('.c1');
//console.log(el6.constructor);
//console.log(el1.parentNode);
//console.log(el1.childNodes);
var container = document.getElementById('container');
//console.log(container.childNodes);
//console.log(container.children);
//console.log(container.firstChild);
//console.log(container.firstElementChild);
//console.log(container.lastChild);
//console.log(container.lastElementChild);
//console.log(el5.previousSibling);
//console.log(el5.previousElementSibling);
//console.log(el5.nextSibling);
//console.log(el5.nextElementSibling);
//console.log(el5.nodeType);
//console.log(el5.previousSibling.nodeType);
/*let containerChildNodes = container.childNodes;
 let textCounter = 0, elementCounter = 0;
 for (let i = 0; i < containerChildNodes.length; i++) {
 let node = containerChildNodes[i];
 if(node.nodeType == 1) elementCounter++;
 if(node.nodeType == 3) textCounter++;
 }
 console.log(elementCounter);
 console.log(textCounter);*/
/*
for (let el of container.childNodes) {
	console.log(el);
}*/
//console.dir(container.childNodes);
//console.log(el1.parentNode.parentNode.parentNode.parentNode.parentNode);
//console.log(el1.parentElement.parentElement.parentElement.parentElement);
var el = document.querySelector('.c1');
//let textNode = el.nextSibling;
//console.log(el.nodeValue);
//console.log(el.textContent);
//let parent = el.parentNode;
//console.log(parent.textContent);

var newElement = document.createElement('div');
container.appendChild(newElement);

newElement.innerText = 'Привет';

container.insertBefore(newElement, container.firstElementChild);

container.removeChild(newElement);

//container.removeChild(el);
el.remove(); // Только с версии 12 InternetExplorer


},{}]},{},[1]);
