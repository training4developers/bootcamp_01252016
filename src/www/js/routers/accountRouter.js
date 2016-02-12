(function() {

	var dependencies = ["jquery", "underscore", "backbone"];

	function accountRouter($, _, Backbone) {

		return Backbone.Router.extend({

			routes: {
				"accounts": "listAccounts",
				"accounts/(:id/)edit": "editAccount",
				"accounts/:id": "viewAccount"
			},

			listAccounts: function() {
				this.trigger("list-accounts");
			},

			viewAccount: function(id) {
				console.log("view account triggered");
				this.trigger("view-account", id);
			},

			editAccount: function(id) {
				if (id) {
					this.trigger("edit-account", id);
				} else {
					this.trigger("create-account");
				}
			}

		});

	}

	define(dependencies, accountRouter);

})();
