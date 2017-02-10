let prepend = require('./prepend');
let deleteTextNodes = require('./deleteTextNodes');
let scanDOM = require('./scanDOM');

let container = document.getElementById('container');
let newEl = document.createElement('div');
newEl.innerHTML = '<span style="color: blue;">Test</span>';

let result = prepend(container, newEl);
//console.log(result);

//deleteTextNodes(container);

scanDOM();
