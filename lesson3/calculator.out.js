(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Created by aquilla on 12.01.2017.
 */
var calculator = function calculator(firstNumber) {
	try {
		//console.log(this);
		//console.log(typeof firstNumber);
		if (typeof firstNumber !== 'number' && typeof firstNumber !== 'string' && typeof firstNumber === 'undefined') {
			throw new Error('Переданный параметр должен быть числом или строкой');
		}
	} catch (e) {
		console.error(e.message);
		firstNumber = 0;
		return this;
	} finally {
		this.sum = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber * 1;
				for (var i = 0; i < arguments.length; i++) {
					res += arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		this.dif = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber;
				for (var i = 0; i < arguments.length; i++) {
					res -= arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		this.div = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber;
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] == 0) {
						throw new Error('На ноль делить нельзя!');
					}
					res /= arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		this.mul = function () {
			try {
				if (arguments.length == 0) {
					throw new Error('Вы не передали никаких параметров!');
				}
				var res = firstNumber;
				for (var i = 0; i < arguments.length; i++) {
					res *= arguments[i];
				}
				return res;
			} catch (e) {
				console.error(e.message);
				return 0;
			}
		};
		return this;
	}
};

module.exports = calculator;


},{}]},{},[1]);
