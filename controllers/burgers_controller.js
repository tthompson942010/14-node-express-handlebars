//requiring the express package and your burgers model 
var express = require('express');
var burgers = require('../models/burgers.js');

//this variable creates the router. The reason for not using 'app.get' is to set the router as its own sort of mini-module. The app can then use the router to handle requests, instead of having to take on the extra work.
var router = express.Router();

//routes for different requests
//route redirects to the home display.
router.get('/', function(req, res){
	res.redirect('/burgers');
});

//home display route.
router.get('/burgers', function(req, res){
	burgers.all(function(data){
		console.log(data);
		res.render('index', {burger: data});
	});
});

router.post('/burgers/create', function(req, res){
	console.log(req.body);
	var newValues = [req.body.name, 0];
	console.log(newValues);
	burgers.create('burgers', 'burger_name, devoured', newValues, function(){
	});
		res.redirect('/');
});

// router.put('/burgers/update/:id', function(req, res){
// 	var condition = 'id = ' + req.params.id;

// 	burgers.update('burgers', condition, function(){

// 	});
// });

module.exports = router;