'use strict';

var prepend = require('./prepend');
var deleteTextNodes = require('./deleteTextNodes');
var scanDOM = require('./scanDOM');

var container = document.getElementById('container');
var newEl = document.createElement('div');
newEl.innerHTML = '<span style="color: blue;">Test</span>';

var result = prepend(container, newEl);
//console.log(result);

//deleteTextNodes(container);

scanDOM();

//# sourceMappingURL=dz.js.map