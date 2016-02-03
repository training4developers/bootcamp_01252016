module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			rootFolder: "app/www",
			port: 8080
		}
	});

	grunt.registerTask("default", function() {

		const
			express = require("express"),
			config = grunt.config();

		let
			app = express();

		app.use(express.static(config.webServer.rootFolder));

		app.listen(config.webServer.port, function() {
			console.log("web server listening on port " + config.webServer.port);
		});

		this.async();
	});

};
