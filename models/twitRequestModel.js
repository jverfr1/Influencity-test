'use strict'

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var LogSchema = Schema({
	date: String,
	data: String
})