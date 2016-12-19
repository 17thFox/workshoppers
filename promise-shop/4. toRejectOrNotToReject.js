'use strict';

var promise = new Promise(function (fulfill, reject) {
		fulfill('I FIRED');
		reject(new Error('I DID NOT FIRE'));
});

promise.then(function(result) {
	console.log(result);
}, function onReject(error){
	console.log(error.message);
});