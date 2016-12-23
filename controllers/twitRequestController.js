'use strict'
var Scrape = require('../scrape');
function getUserInfo(req,res) {
	if (req.params.userId) {
		var userId = req.params.userId;
	}

	Scrape.getInfo(res,userId);
	

}

function getUser(req) {
	return req.params.userId;
}

module.exports = {
	getUserInfo,
	getUser
}
