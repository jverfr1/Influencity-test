'use strict'
var Scrape = require('../scrape');
function getUserInfo(req,res) {
	if (req.params.userId) {
		var userId = req.params.userId;
	};
	Scrape.getInfo(res,userId);	
}

module.exports = {
	getUserInfo,
}
