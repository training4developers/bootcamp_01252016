module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			rootFolder: "dist/www",
			port: 8080,
			uploadFolder: "dist/uploads/"
		},
		mongoServer: {
			host: "localhost",
			port: 27017,
			dbName: "t4dclass"
		},
		sass: {
			site: {
	      files: { "dist/www/css/site.css": "src/www/css/site.scss" }
	    }
		},
		cssmin: {
			site: {
				files: { "dist/www/css/site.min.css": "dist/www/css/site.css" }
			}
		},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: "./src", src: ["**","!www/js/**/*"], dest: "./dist" },
				]
			}
		},
		babel: {
			options: {
				plugins: ["transform-react-jsx"],
				presets: ["es2015", "react"]
			},
			js: {
			  files: [{
			    expand: true,
			    cwd: "src/www/js",
			    src: ["**/*.js","**/*.jsx"],
			    dest: "dist/www/js",
			    ext: ".js"
			  }]
			}
		},
		nodemon: {
		  dev: {
		    script: 'index.js',
				options : {
					watch: ["dist"],
					ignore: ["dist/www/**/*"],
					callback: function (nodemon) {

		        // opens browser on initial server start
		        nodemon.on('config:update', function () {
		          // Delay before server listens on port
		          setTimeout(function() {
		            require('open')('http://localhost:8080');
		          }, 1000);
		        });

		      },
					delay: 1000
				}
			}

		},
		watch: {
			sass: {
				files: ["src/www/css/site.scss"],
				tasks: ["sass", "cssmin"]
			},
			copy: {
				files: ["src/**/*","!src/www/js/**/*","!src/www/css/**/*"],
				tasks: ["copy"]
			},
			babel: {
				files: ["src/www/js/**"],
				tasks: ["babel"]
			},
		},
		concurrent: {
			tasks: ["nodemon", "watch"],
			options: {
				logConcurrentOutput: true
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-nodemon");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concurrent");


	grunt.registerTask("default", ["sass", "cssmin", "copy", "babel", "concurrent"]);

};
