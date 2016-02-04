module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			rootFolder: "app/www",
			port: 8080,
			uploadFolder: "app/uploads/"
		}
	});

	grunt.registerTask("default", function() {

		this.async();

		require("./app/app")(grunt.config());
	});

};
