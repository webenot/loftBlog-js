'use strict';

var obj1 = {
	name: 'Сергей',
	lastName: 'Мелюков'
};
/*
console.log(obj1.lastName);
console.log(obj1['lastName']);
console.log(obj1[1]); // нельзя - будет undefined*/

var key = 'lastName';
console.log(obj1[key]);
console.log(obj1.key); // нельзя - будет undefined

//# sourceMappingURL=index.js.map