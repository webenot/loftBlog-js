let obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков'
};
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

console.log(Object.keys(obj1)); // метод статический