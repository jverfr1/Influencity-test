'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/log', (err,res) => {
	if (err) {
		throw err;
	}else {
		console.log("MongoDB conncetion corect");
		app.listen(port, ()=> {
			console.log(`Influencity testing working in http://localhost:${port}`);
		})
	}
})