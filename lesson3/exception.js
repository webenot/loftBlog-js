/**
 * Created by aquilla on 11.01.2017.
 */
function div(a, b) {
	if (b == 0) {
		throw new Error('На ноль делить нельзя!');
	}
	if (b < 0) {
		throw new Error('Делитель должен быть положительным числом!');

	}
	return a / b;
}

try {
	let res = div(10, -2);
	console.log(res + 1000);
} catch (e) {
	console.error(e.message);
} finally {
	console.log('Finally!');
}
