var Ping = require('./lib/ping'),


	websites = [

		{

			url: 'http://vit.picturepark.com/Website/monitoring.aspx',
			timeout: 5


		},

		{

			url: 'http://markant.picturepark.com/Website/monitoring.aspx',
			timeout: 1
		}



	],

	monitors = [];


websites.forEach(function (website) {

	var monitor = new Ping ({

		website: website.url,
		timeout: website.timeout

	});


	monitors.push(monitor);



});
