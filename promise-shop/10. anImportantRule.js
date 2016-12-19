'use strict';
var Q = require('q');

function alwaysThrows(){
	throw new Error('OH NOES');
}

function iterate(firstArgument){
	console.log(firstArgument);
	return firstArgument + 1;
}

var promise = Q.fcall(iterate, 1);

for(var i = 0; i < 10; i++){
	if(i === 4){
		promise = promise.then(alwaysThrows);
	}else{
		promise = promise.then(iterate);
	}
}

promise.catch(console.log);