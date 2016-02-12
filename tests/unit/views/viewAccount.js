define(function (require) {

	var
		registerSuite = require('intern!object'),
		assert = require('intern/chai!assert'),
		Account = require('app/models/account'),
		Accounts = require('app/collections/accounts');
		ViewAccount = require('app/views/viewAccount');

	function getViewAccount() {

		return new ViewAccount({
			model: new Account({
				emailAddress: "bob@gmail.com",
				firstName: "Bob",
				lastName: "Smith"
			})
		});

	}

  registerSuite({
    name: 'viewAccount View',

		render: function() {
			var rootElement = getViewAccount().render().$el;

			assert.strictEqual(rootElement.find("[data-edit-account]").length, 1);
			assert.strictEqual(rootElement.find("[data-list-accounts]").length, 1);
		},

		editAccount: function() {

			var viewAccount = getViewAccount();
			viewAccount.on("edit-account", function(model) {
				assert.strictEqual(viewAccount.model, model);
			});

			viewAccount.editAccount();
		},


  });
});
