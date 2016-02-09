define(["backbone"], function(Backbone) {

	return class Account extends Backbone.Model {

		get idAttribute() {
			return "_id";
		}

		get urlRoot() {
			return "/api/accounts";
		}

	}

});
