/**
 * Created by aquilla on 11.01.2017.
 */
function div(a, b) {
	if (b == 0) {
		throw new Error('На ноль делить нельзя');
	}
	return a / b;
}

let res = div(10, 0);

console.log(res + 1000);