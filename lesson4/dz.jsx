//let forEach = require('./forEach');
//let filter = require('./filter');
//let map = require('./map');
//let slice = require('./slice');
//let reduce = require('./reduce');
let splice = require('./splice');
let deepEqual = require('./deepEqual');

let array = [1, 2, 3, 4, 5, 6];
//forEach(array, item => console.log(item));

//let greaterThan4 = filter(array, item => item > 4);
//console.log(greaterThan4);

//let sqare = map(array, item => item*item);
//console.log(sqare);

//console.log(slice(array, 3, 5));
console.log(splice(array, 3, 2, 1, 1, 1));
console.log(array);
/*console.log(reduce(array, function(a, b) {
	return a + b;
}, 0));*/

/*
var flattened = reduce([[0, 1], [2, 3], [4, 5]],function(a, b) {
	return a.concat(b);
}, []);

console.log(flattened);*/

/*
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = reduce(names, function(allNames, name) {
	if (name in allNames) {
		allNames[name]++;
	}
	else {
		allNames[name] = 1;
	}
	return allNames;
}, {});

console.log(countedNames);*/

/*var friends = [
	{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
	{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
	{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
];

// allbooks - list which will contain all friends books +
// additional list contained in initialValue
var allbooks = reduce(friends,function(prev, curr) {
	return [...prev, ...curr.books];
}, ["Alphabet"]);

console.log(allbooks);*/

/*var maxCallback = ( pre, cur ) => Math.max( pre.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
console.log(reduce([ { x: 22 }, { x: 42 } ], maxCallback )); // 42
console.log(reduce([ { x: 22 }            ], maxCallback )); // { x: 22 }
console.log(reduce( [                      ], maxCallback )); // TypeError

// map/reduce; better solution, also works for empty arrays
console.log(reduce([ { x: 22 }, { x: 42 } ].map( el => el.x ), maxCallback2, -Infinity ));*/

let objA = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	prop4: {
		subProp1: 'sub value1',
		subProp2: {
			subSubProp1: 'sub sub value1',
			subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
		}
	},
	prop5: 1000,
	prop6: new Date(2016, 2, 10)
};

let objB = {
	prop5: 1000,
	prop3: 'value3',
	prop1: 'value1',
	prop2: 'value2',
	prop6: new Date('2016/03/10'),
	prop4: {
		subProp2: {
			subSubProp1: 'sub sub value1',
			subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
		},
		subProp1: 'sub value1'
	}
};

let arr1 = [1,2,3,4], arr2 = [2,1,3,4];

console.time();
console.log(deepEqual(objA, objB));
console.log(deepEqual(arr1, arr2));
console.log(Object.keys(arr1).length);
//console.log(typeof a);
console.timeEnd();