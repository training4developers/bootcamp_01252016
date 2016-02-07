module.exports = function(modelName) {

	"use strict";

	const
		mongoose = require("mongoose"),
		pluralize = require('mongoose/lib/utils').toCollectionName,
		collectionName = 	pluralize(modelName),
		DataModel = require("../mongoose/" + collectionName),
		express = require("express"),
		router = express.Router();

	router.route("/" + collectionName)
		.get(function(req, res) {

			DataModel.find({}, function(err, results) {
				if (err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}
				res.json(results);
			});
		})
		.post(function(req, res) {

			var t = new DataModel(req.body);
			t.save(function(err, result) {
				if (err) {
					res.status(500).json(err);
					return;
				}
				res.json(result);
			});
		});

	router.route("/" + collectionName + "/:id")
		.get(function(req, res) {
			DataModel.findById(req.params.id,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(result);
				});
		})
		.put(function(req, res) {
			DataModel.findByIdAndUpdate(req.params.id,
				req.body,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(req.body);
				});
		})
		.delete(function(req, res) {
			DataModel.findByIdAndRemove(req.params.id,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(result);
				});
		});

 	return router;
}
