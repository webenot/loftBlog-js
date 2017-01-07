/**
 * Created by aquilla on 07.01.2017.
 */
/*
function summ (a, b) {
    //console.log(this);
    return this.prop + a + b;
}
let a = {
        prop: 1,
        f: function () {
            var that = this;
            var func = function () {
                console.log(that.prop);
            };
            func();
        }
    },
    b = {
        prop: 2,
        f: summ
    };
/!*
a.f();
b.f();
var newFunc = a.f.bind(b);

newFunc();*!/

/!*a.f = a.f.bind(b);

a.f();
b.f();*!/

/!*a.f(1, 1);
b.f(2, 2);

a.f = a.f.bind(b, 1, 1);
b.f = b.f.bind(a, 2, 2);

a.f();
b.f();*!/

/!*console.log(summ.apply(a, [1, 1]));
console.log(summ.apply(b, [2, 2]));*!/

/!*
summ(1, 1);
*!/

/!*
a.f(1, 1);
// Равносильно
a['f'](1, 1);*!/

//a.f();

//var newFunc = summ.bind(a, 1).bind(a, 1);
let newFunc = summ.bind(a, 1);
//newFunc = newFunc.bind(a, 1);
//console.log(newFunc(2));

setTimeout(a.f.bind(a), 1000);*/

let F = function (name) {
        this.setName(name);
    },
    F2 = function (name, age) {
        this.setName(name);
        this.setAge(age);
    };

F.prototype.setName = function (name) {
    this.name = name;
};

F.prototype.getName = function () {
    return this.name;
};

F2.prototype = F.prototype;

F2.prototype.setAge = function (age) {
    this.age = age;
};

F2.prototype.getAge = function () {
    return this.age;
};

let obj1 = new F('Сергей'),
    obj2 = new F2('Андрей', 23);
/*
console.log(obj1.getName());
obj1.setName('Николай');
console.log(obj1.getName());*/

//console.log(F.prototype);

//console.log(F.prototype === obj1.__proto__);

/*
console.log(obj1.getName());
obj1.setName('Николай');
console.log(obj1.getName());

console.log(obj1);*/

obj1.setAge(30);

console.log(obj1.getName(), obj1.getAge());
console.log(obj2.getName(), obj2.getAge());