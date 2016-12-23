'use strict'

var express = require('express');
var TwitRequestController = require('../controllers/twitRequestController');
var api = express.Router();

api.get('/user/:userId', TwitRequestController.getUserInfo);

module.exports = api;