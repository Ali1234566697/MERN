var express = require('express');
var app = express();
app.get('/home', function (req, res) {
	res.send("welcome to  home page! this is client server done by ali");
	
});
app.post('/contact', function (req, res) {
	res.send("You just called the post method at '/contact'!\n");
	
});
app.all('/test', function (req, res) {
	res.send("Http method doesn't have any effect on this route");
	
});

app.listen(5000);