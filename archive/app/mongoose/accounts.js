"use strict";

const
	mongoose = require("mongoose"),

	accountSchema = mongoose.Schema({
		acctNum: String,
		name: String,
		balance: Number,
		opened: Date,
		owner: String
	}),

	AccountModel = mongoose.model("account", accountSchema);

module.exports = AccountModel;
