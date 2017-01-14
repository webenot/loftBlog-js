'use strict';

var obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 180,
	valueOf: function valueOf() {
		return this.old;
	},
	toString: function toString() {
		return '[' + this.name + '] - [' + this.lastName + ']';
	}
};

var obj2 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 180,
	valueOf: function valueOf() {
		return this.old;
	},
	toString: function toString() {
		return '[' + this.name + '] - [' + this.lastName + ']';
	}
};

/*if (obj1 == obj2) { // не одинаковые, сравниваются адреса, где хранятся обьекты, но если есть метод valueOf, то можно сравнивать по значению, которое возвращает этот метод, кроме сравнения ==
	console.log('Обьекты одинаковые!');
}*/

console.log(obj1 == obj2);
console.log(obj1 >= obj2);
console.log(obj1 <= obj2);
console.log(obj1 > obj2);
console.log(obj1 < obj2);

/*
console.log(obj1.lastName);
console.log(obj1['lastName']);
console.log(obj1[1]); // нельзя - будет undefined*/

/*let key = 'lastName';
console.log(obj1[key]);
console.log(obj1.key); // нельзя - будет undefined*/

//obj1.lastName = '!!!!!!!!!'; // можно так obj1['lastName'] = '!!!!!!!'

/*
delete obj1.lastName; // можно delete obj1['lastName']
console.log(obj1);
*/

/*
for (let prop in obj1) {
	//console.log(prop);
	console.log(obj1[prop]);
	console.log(obj1.prop); // нельзя - будет undefined
}*/

// неправильно
/*
if(!obj1.old) {
	console.log('Свойства old НЕТ в обьекте');
}*/
/*
if(obj1.hasOwnProperty('old')) {
	console.log('Свойство old ЕСТЬ в обьекте');
} else {
	console.log('Свойства old НЕТ в обьекте');
}*/

//console.log(Object.keys(obj1)); // метод статический

/*
let keys = Object.keys(obj1);

for (let i = 0; i < keys.length; i++) {
	//console.log(keys[i]);
	//console.log(obj1[keys[i]]);
	let key = keys[i];
	console.log(obj1[key]);
}*/

//Object.keys(obj1).forEach(key => console.log(obj1[key]));

//# sourceMappingURL=index.js.map