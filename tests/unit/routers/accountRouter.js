define(function (require) {

	var
		registerSuite = require('intern!object'),
		assert = require('intern/chai!assert'),
		AccountRouter = require('app/routers/accountRouter');

  registerSuite({
    name: 'accountRouter Router',

		editAccount: function() {

			var
				accountRouter = new AccountRouter(),
				accountId = 1;

			accountRouter.on("edit-account", function(id) {
				assert.strictEqual(accountId, id);
			});

			accountRouter.on("create-account", function(id) {
				assert.strictEqual(undefined, id);
			});

			accountRouter.editAccount(1);
			accountRouter.editAccount();

		},

		navEditAccount: function() {

			var
				accountRouter = new AccountRouter();

			assert.strictEqual(accountRouter.routes["accounts"], "listAccounts");

		}


  });
});
