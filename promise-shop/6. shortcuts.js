'use strict';

var resolved = Promise.resolve('SECRET VALUE');

var rejected = Promise.reject(new Error('SECRET VALUE'));


resolved.then(console.log);

rejected.catch(function (err) {
console.error('THERE IS AN ERROR!!!');
console.error(err.message);
});
