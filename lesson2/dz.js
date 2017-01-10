/**
 * Created by aquilla on 10.01.2017.
 */

function consoleRec(source, number) {
	console.log(source[number++]);
	if (number < source.length) {
		consoleRec(source, number);
	}
}

let array = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

consoleRec(array, 0);