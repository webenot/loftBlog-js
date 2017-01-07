/**
 * Created by aquilla on 07.01.2017.
 */
function summ (a, b) {
    console.log(this);
    return this.prop + a + b;
}
var a = {
    prop: 1,
    f: function () {
        var func = function () {
            console.log(this.prop);
        };
        func();
    }
},
    b = {
        prop: 2,
        f: summ
    };
/*
a.f();
b.f();
var newFunc = a.f.bind(b);

newFunc();*/

/*a.f = a.f.bind(b);

a.f();
b.f();*/

/*a.f(1, 1);
b.f(2, 2);

a.f = a.f.bind(b, 1, 1);
b.f = b.f.bind(a, 2, 2);

a.f();
b.f();*/

/*console.log(summ.apply(a, [1, 1]));
console.log(summ.apply(b, [2, 2]));*/

/*
summ(1, 1);
*/

/*
a.f(1, 1);
// Равносильно
a['f'](1, 1);*/

a.f();