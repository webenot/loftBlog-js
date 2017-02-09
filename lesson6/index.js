'use strict';

//let el1 = document.getElementById('i1');
//console.log(el1.constructor);
//let el2 = document.getElementsByName('input1');
//console.log(el2.constructor);
//let el3 = document.getElementsByClassName('c1');
//console.log(el3.constructor);
//let el4 = document.getElementsByTagName('div');
//console.log(el4.constructor);
//let el5 = document.querySelector('input[type="text"]');
//console.log(el5.constructor);
//let el6 = document.querySelectorAll('.c1');
//console.log(el6.constructor);
//console.log(el1.parentNode);
//console.log(el1.childNodes);
var container = document.getElementById('container');
//console.log(container.childNodes);
//console.log(container.children);
//console.log(container.firstChild);
//console.log(container.firstElementChild);
//console.log(container.lastChild);
//console.log(container.lastElementChild);
//console.log(el5.previousSibling);
//console.log(el5.previousElementSibling);
//console.log(el5.nextSibling);
//console.log(el5.nextElementSibling);
//console.log(el5.nodeType);
//console.log(el5.previousSibling.nodeType);
/*let containerChildNodes = container.childNodes;
 let textCounter = 0, elementCounter = 0;
 for (let i = 0; i < containerChildNodes.length; i++) {
 let node = containerChildNodes[i];
 if(node.nodeType == 1) elementCounter++;
 if(node.nodeType == 3) textCounter++;
 }
 console.log(elementCounter);
 console.log(textCounter);*/
/*
for (let el of container.childNodes) {
	console.log(el);
}*/
//console.dir(container.childNodes);
//console.log(el1.parentNode.parentNode.parentNode.parentNode.parentNode);
//console.log(el1.parentElement.parentElement.parentElement.parentElement);
//let el = document.querySelector('.c1');
//let textNode = el.nextSibling;
//console.log(el.nodeValue);
//console.log(el.textContent);
//let parent = el.parentNode;
//console.log(parent.textContent);

//let newElement = document.createElement('div');
//container.appendChild(newElement);

//newElement.innerText = 'Привет';

///container.insertBefore(newElement, container.firstElementChild);

//container.removeChild(newElement);

//container.removeChild(el);
//el.remove(); // Только с версии 13 InternetExplorer Edge

var i2 = document.getElementById('i2');

//console.log(i2.className);

//console.dir(i2.classList);
//i2.classList.add('c3');
//i2.classList.remove('c2');
//i2.classList.toggle('c2');
//i2.classList.toggle('c2');

//console.dir(i2.style);

//i2.style.color = 'blue';
//console.log(i2.tagName);
//console.log(i2.attributes.style);
//i2.setAttribute('my-attr', '123456');
//i2.className = 'c4 c5';
//i2.setAttribute('class', 'c6 c7');
//i2.removeAttribute('my-attr');

var c1 = jQuery('.c1');
console.log(c1);
c1.attr('my-attr', '1631341');

//# sourceMappingURL=index.js.map