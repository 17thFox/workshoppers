function all(firstPromise, secondPromise){
	return new Promise(function (fulfill, reject){
		var counter = 0;
		var array = [];
		firstPromise.then(function(value){
			array.push(value);
			counter++;

			if(counter === 2){
				fulfill(array);
			}
		});

		secondPromise.then(function(value){
			array.push(value);
			counter++;

			if(counter === 2){
				fulfill(array);
			}
		});

	});
}


all(getPromise1(), getPromise2()).then(console.log);