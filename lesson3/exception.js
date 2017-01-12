/**
 * Created by aquilla on 11.01.2017.
 */
function div(a, b) {
	try {
		if (b == 0) {
			throw new Error('На ноль делить нельзя!');
		}
		if (b < 0) {
			throw new Error('Делитель должен быть положительным числом!');

		}
		return a / b;
	} catch (e) {
		console.error(e.message);
		return 0;
	} finally {
		console.log('Операция завершена!');
	}
}

let res = div(10, '0');
console.log(res + 1000);
