'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*let obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 180,
	valueOf () {
		return this.old;
	},
	toString() {
		return `[${this.name}] - [${this.lastName}]`;
	}
};

let obj2 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 180,
	valueOf () {
		return this.old;
	},
	toString() {
		return `[${this.name}] - [${this.lastName}]`;
	}
};*/

/*if (obj1 == obj2) { // не одинаковые, сравниваются адреса, где хранятся обьекты, но если есть метод valueOf, то можно сравнивать по значению, которое возвращает этот метод, кроме сравнения ==
	console.log('Обьекты одинаковые!');
}*/

/*console.log(obj1 == obj2);
console.log(obj1 >= obj2);
console.log(obj1 <= obj2);
console.log(obj1 > obj2);
console.log(obj1 < obj2);*/

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

/*
let obj1 = [
	{
		name: 'name',
		writable: true,
		value: 'Сергей'
	},
	{
		name: 'lastName',
		writable: true,
		value: 'Мелюков'
	},
	{
		name: 'old',
		writable: true,
		value: 180
	}
];*/

var obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 180
};

Object.defineProperty(obj1, 'fullName', { // Это дескриптор свойства fullName
	//value: '!!!!', // default undefined - нельзя использовать вместе с get
	enumerable: true, // default false
	//writable: true, // default false - нельзя использовать вместе с get
	configurable: true, // default false
	get: function get() {
		return this.name + ' ' + this.lastName;
	},
	set: function set(value) {
		//console.log('Новое значение:', value);
		var name = void 0,
		    lastName = void 0;

		// Babel при преобразовании кода в браузере выдает ошибку
		var _value$split = value.split(' ');

		var _value$split2 = (0, _slicedToArray3.default)(_value$split, 2);

		name = _value$split2[0];
		lastName = _value$split2[1];
		this.name = name;
		this.lastName = lastName;
	}
});

console.log(obj1.fullName);

console.log(obj1);

obj1.fullName = 'Иван Иванов';

//console.log(obj1.toString());

for (var prop in obj1) {
	console.log(obj1[prop]);
}

console.log(obj1);

//# sourceMappingURL=index.js.map