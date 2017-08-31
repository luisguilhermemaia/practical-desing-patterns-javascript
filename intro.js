//3 forms to creating an object in Javascript

var obj = {};

var nextObj = Object.create(Object.prototype);

var lastObj = new Object();

// dot notation

obj.param = 'new value';

console.log(obj.param); // new value

// square bracket notation

obj['param'] = 'very new value';

console.log(obj['param']); // very new value

// you can use bracket notation using variables.

var val = 'value';

obj[val] = 'value';

console.log(obj[val]); // value


//define a property
Object.defineProperty(obj, 'name', {
    value: 'my name',
    writable: true,
    enumerable: true,
    configurable: true
});

