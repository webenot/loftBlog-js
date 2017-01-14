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

/*let obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков',
	old: 180
};*/

/*Object.defineProperty(obj1, 'fullName', { // Это дескриптор свойства fullName
	//value: '!!!!', // default undefined - нельзя использовать вместе с get
	enumerable: true, // default false
	//writable: true, // default false - нельзя использовать вместе с get
	configurable: true, // default false
	get () {
		return `${this.name} ${this.lastName}`;
	},
	set (value) {
		//console.log('Новое значение:', value);
		let name, lastName;
		[name, lastName] = value.split(' '); // Babel при преобразовании кода в браузере выдает ошибку
		this.name = name;
		this.lastName = lastName;
	}
});

console.log(obj1.fullName);

console.log(obj1);

obj1.fullName = 'Иван Иванов';

//console.log(obj1.toString());

for (let prop in obj1) {
	console.log(obj1[prop]);
}
*/
//console.log(obj1);

let array = [
	'Сергей',
	'Мелюков',
	180
];

console.log(array);

array.push('!!!');
array.push(100, 200, 300);
array[array.length] = '!!!!';

console.log(array);

/*
delete array[3]; // неправильное удаление

console.log(array);*/

//array.splice(3, 2);
//array.splice(3, 0, 1,2,3,4,5);
//array.splice(-1, 0, 1,2,3,4);
array.splice(3, 1, 1000);
console.log(array);