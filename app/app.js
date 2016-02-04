module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser"),
		multer = require("multer");

	let
		app = express(),
		server = http.createServer(app),
		storage = multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, config.webServer.uploadFolder);
			},
			filename: function (req, file, cb) {
				cb(null, file.originalname);
			}
		}),
		upload = multer({ storage: storage });

	app.use("/api", bodyParser.json());

	app.post('/api/upload', upload.single('demofile'), function(req, res, next) {
		res.send("uploaded!");
	});

	app.use(express.static(config.webServer.rootFolder));

	server.listen(config.webServer.port, function() {
		console.log("web server listening on port " + 8080);
	});

};
