var arr = [];

for (var i = 0; i < 10; i++) {

	console.log(i);

	arr.push(function(num) {
		console.log("teste");
		console.log(num);
		console.log('-----');
	});

}

console.log(arr[0]());