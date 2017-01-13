'use strict';

var obj1 = {
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

for (var prop in obj1) {
	//console.log(prop);
	console.log(obj1[prop]);
	console.log(obj1.prop); // нельзя - будет undefined
}

//# sourceMappingURL=index.js.map