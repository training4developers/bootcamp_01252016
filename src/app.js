module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		WebSocketServer = require('ws').Server,
		express = require("express"),
		bodyParser = require("body-parser"),
		multer = require("multer"),
		mongoose = require("mongoose");

	let
		app = express(),
		server = http.createServer(app),
		wss = new WebSocketServer({ server: server }),
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

	wss.on('connection', function connection(ws) {

	  // ws.on('message', function incoming(message) {
	  //   console.log('received: %s', message);
	  // });
		//
	  // ws.send('something');

		var filePath;

		console.log("web sockets open");

		ws.on("error", function(data) {
			console.log("web sockets error");
		});

		ws.on("close", function(data) {
			console.log("web sockets closed");
		});

		ws.on("message", function(data) {

			if (!Buffer.isBuffer(data)) {

				filePath = path.join(__dirname, "app", "uploads", JSON.parse(data).fileName);

			} else {

				var
					gzip = zlib.createGzip(),
					bufferStream = new BufferStream(data),
					output = fs.createWriteStream(filePath + ".gz");

				output.on("finish", function() {
					ws.send("upload result: success");
				});

				bufferStream.pipe(gzip).pipe(output);

			}

		});

	});

	app.post('/api/upload', upload.single('demofile'), function(req, res, next) {
		res.send("uploaded!");
	});

	app.use("/api", bodyParser.json());

	app.use("/api", require("./routers/default")("account"));
	app.use("/api", require("./routers/default")("movie"));

	app.use(express.static(config.webServer.rootFolder));

	return {
		start: function(cb) {
			server.listen(config.webServer.port, cb);
		},
		stop: function(cb) {
			server.close(cb);
		}
	};



};
