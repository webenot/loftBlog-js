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
    this.name = name;
};

let obj1 = new F('Сергей'),
    obj2 = new F('Андрей');
console.log(obj1);
console.log(obj2);