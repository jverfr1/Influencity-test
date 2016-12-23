'use strict'

var Xray = require('x-ray');
var x = Xray();



function getInfo(res,userId) {
	x('https://twitter.com/'+userId, {
		image: 'img.ProfileAvatar-image@src',
		tweets: 'a[data-nav="tweets"] span.ProfileNav-value',
		following_count: 'a[data-nav="following"] span.ProfileNav-value',
		followers_count: 'a[data-nav="followers"] span.ProfileNav-value',
		bio: '.ProfileHeaderCard-bio'
		})((err, response)=> {
			res.status(200).send({data: response});
	});
}

module.exports = {
	getInfo
}