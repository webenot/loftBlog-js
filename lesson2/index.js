/**
 * Created by aquilla on 08.01.2017.
 */
function sum(source) {
	let result = 0;
	for(let i = 0; i < source.length; i++) {
		result += source[i];
	}
	return result;
}

let array = [1,2,3];

let result = sum(array);

console.log(result);