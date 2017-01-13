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

obj1.lastName = '!!!!!!!!!';
console.log(obj1);
