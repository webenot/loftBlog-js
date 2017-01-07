/**
 * Created by aquilla on 07.01.2017.
 */
var a = {
    prop: 1,
    f: function () {
        console.log(this.prop);
    }
},
    b = {
        prop: 2,
        f: function () {
            console.log(this.prop);
        }
    };
/*
a.f();
b.f();
var newFunc = a.f.bind(b);

newFunc();*/

a.f = a.f.bind(b);

a.f();
b.f();
