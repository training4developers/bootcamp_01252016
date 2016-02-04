module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			rootFolder: "app/www",
			port: 8080,
			uploadFolder: "app/uploads/"
		},
		mongoServer: {
			host: "localhost",
			port: 27017,
			dbName: "Intuit"
		}
	});

	grunt.registerTask("default", function() {

		this.async();

		require("./app/app")(grunt.config());
	});

};
