/**
 * Created by aquilla on 08.01.2017.
 */
/*
let sum = function() {
	let result = 0;
	for(let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
};

//let array = [1,2,3];

let sum2 = sum;

let result = sum2(1,2,3);

console.log(result);*/

function filter(source, fn) {
	let result = [];
	for (let i = 0; i< source.length; i++) {
		if (fn(source[i])) {
			result.push(source[i]);
		}
	}
	return result;
}

function greaterThan4(value) {
	return value > 4;
}

let array = [1,2,3,4,5,6,7,8,9];

//console.log(res);

let res = filter(array, greaterThan4);

console.log(res);