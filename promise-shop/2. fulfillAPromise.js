'use strict';

var promise = new Promise(function (fulfill, reject) {
	if(fulfill){
		setTimeout(function () {
			fulfill('FULFILLED!');
		}, 300);
	}
	else{
		reject(Error('It broke'));
	}
});

promise.then(function(result) {
	console.log(result); // "FULFILLED!"
}, function(err) {
	console.log(err); // Error: "It broke"
});
