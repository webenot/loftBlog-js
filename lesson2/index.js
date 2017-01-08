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

function filter(source, graterThan) {
	let result = [];
	for (let i = 0; i< source.length; i++) {
		if (source[i] > graterThan) {
			result.push(source[i]);
		}
	}
	return result;
}

let array = [1,2,3,4,5,6,7,8,9];

let res = filter(array, 2);

console.log(res);