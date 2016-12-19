var parsePr = new Promise(function parsePromised(fulfill, reject){
	if (JSON.parse(process.argv[2])){
		fulfill('Good');
	}else{
		reject(new Error());
	}
});

parsePr.then(null, console.log);
