"use strict";

const fs = require("fs");

fs.readFile("./config.json", function(err, data) {

	const
		config = JSON.parse(data),
		app = require("./dist/app")(config);

		app.start(function() {
			console.log(`web server listening on port ${config.webServer.port}`);
		});

});
