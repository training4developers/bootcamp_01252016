define(["app/dispatcher", "app/constants", "app/stores/base-store", "app/collections/accounts"],
	function(dispatcher, constants, BaseStore, Accounts) {

	"use strict";

	let
		_accounts = new Accounts();

	class AccountStore extends BaseStore {

		constructor() {
			super();
		}

		getAll() {
			return _accounts;
		}

	}

	let accountStore = new AccountStore();

	dispatcher.register(function(action) {

		switch(action.actionType) {
			case constants.ACCOUNTS_REFRESH:
				_accounts = action.accounts;
				accountStore.emitChange();
				break;
			default:
				// noop
				break;
		}

	});


	return accountStore;

});
