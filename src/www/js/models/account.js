define(["backbone"], function(Backbone) {

	return Backbone.Model.extend({

		idAttribute: "_id",
		urlRoot: "/api/accounts",

		defaults: {
			emailAddress: undefined,
			password: undefined,
			firstName: undefined,
			lastName: undefined
		},

		// custom stuff

		getName: function() {
			return this.get("firstName") + " " + this.get("lastName");
		},

		getRecordTitle: function() {
			return this.get("emailAddress") + " " + this.getName();
		}

	})

});
