/**
 * Created by aquilla on 08.01.2017.
 */
function sum() {
	let result = 0;
	for(let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

//let array = [1,2,3];

let result = sum(1,2,3);

console.log(result);