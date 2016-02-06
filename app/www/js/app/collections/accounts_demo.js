define(["jquery","underscore","backbone","app/models/account"],
	function($, _, Backbone, Account) {

		return Backbone.Collection.extend({
			model: Account,
			url: "/api/accounts"
		});

	});
