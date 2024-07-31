var fs = require('fs');
fs.writeFile('apple.txt', 'could you understrand or not', function (err) {
	if(err) {
		throw err;
	}
	console.log('saved!');
});