'use strict';

var attach = function attachTitle(name){
	return 'DR. ' + name;
}

var resolved = Promise.resolve('MANHATTAN');

resolved.then(attach).then(console.log);
