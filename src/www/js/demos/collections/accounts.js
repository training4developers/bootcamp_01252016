define(["backbone", "app/models/account"], function(Backbone, Account) {

	return class Accounts extends Backbone.Collection {

		get model() {
			return Account;
		}

		get url() {
			return "/api/accounts";
		}

	};

});
