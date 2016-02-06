define(["jquery","underscore","backbone"],
	function($, _, Backbone) {

		return Backbone.Model.extend({
			idAttribute: "_id",
			urlRoot: "/api/accounts",
			getAccountInfo: function() {
				return this.get()
			}
		});

	});
