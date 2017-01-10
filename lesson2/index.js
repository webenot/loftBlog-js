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

/*unction filter(source, fn) {
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

let res = filter(array, function (value) {
	return value > 4;
});

console.log(res);*/

/*function func1(a) {
	let b = 10;
	function func2(d) {
		let c = 100;
		return a + b + c + d;
	}

	return func2;
}

let res = func1(1);
console.log(res(2));*/
//console.log(res2);

/*
function rec(number) {
	console.log(number--);
	if (number >= 0)
		rec(number);
}

rec(10);*/
// Если один параметр, то скобки можно опустить, если параметров несколько или их нет, то скобки нужны
/*
let sum = (source) => {
	let result = 0;
	for (let i = 0; i < source.length; i++) {
		result += source[i];
	}
	return result;
};

let array = [1, 2, 3];

console.log(sum(array));*/

let array = [2, 3, 4];

let array2 = array.map(number => {
	return number * number;
});

console.log(array);
console.log(array2);