"use strict";

const
	mongoose = require("mongoose");

module.exports = mongoose.model("movie", mongoose.Schema({
	name: String,
	year: Number,
	rating: String,
	genre: String
}));
