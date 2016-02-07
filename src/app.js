module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser"),
		multer = require("multer"),
		mongoose = require("mongoose");

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

	mongoose.connect(`mongodb://${config.mongoServer.host}:${config.mongoServer.port}/${config.mongoServer.dbName}`);

	app.post('/api/upload', upload.single('demofile'), function(req, res, next) {
		res.send("uploaded!");
	});

	app.use("/api", bodyParser.json());

	app.use("/api", require("./routers/default")("account"));

	app.use(express.static(config.webServer.rootFolder));

	return {
		start: function(cb) {
			server.listen(config.webServer.port, cb);
		},
		stop: function(cb) {
			server.close(cb);
		}
	}



};
