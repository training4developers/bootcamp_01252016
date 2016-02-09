define(["app/constants","app/dispatcher", "app/collections/accounts"],
	function(constants, dispatcher, Accounts) {

		let
			_accounts = new Accounts();

		return {
			refresh: function() {

				_accounts.fetch({
					success: function(accounts, data, xhr) {
						dispatcher.dispatch({
							actionType: constants.ACCOUNTS_REFRESH,
							accounts: accounts
						});
					}
				});

			},
			updateAccount: function(account) {

				var that = this;

				account.save(null, {
					success: function() {
						that.refresh();
					}
				});

				// console.dir(account);
				// _accounts.get(account.id).attributes = account.attributes;
				// dispatcher.dispatch({
				// 	actionType: constants.ACCOUNTS_REFRESH,
				// 	accounts: _accounts
				// });
			}
		};

	});
