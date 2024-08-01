var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send("Get route on things");
	
});

router.post('/', function (req, res) {
	res.send("post route on thihngs.");
	
});

module.exports = router;

