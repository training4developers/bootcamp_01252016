define(function (require) {

	var
		registerSuite = require('intern!object'),
		assert = require('intern/chai!assert'),
		Account = require('app/models/account'),
		Accounts = require('app/collections/accounts');

  registerSuite({
    name: 'accounts Collection',

    setup: function () {
      console.log('setup');
    },
    beforeEach: function () {
      console.log('beforeEach');
    },
    afterEach: function () {
      console.log('afterEach');
    },
    teardown: function () {
      console.log('teardown');
    },

		'inner suite': {
      setup: function () {
        console.log('inner setup');
      },
      beforeEach: function () {
        console.log('inner beforeEach');
      },
      afterEach: function () {
        console.log('inner afterEach');
      },
      teardown: function () {
        console.log('inner teardown');
      },

      'test A': function () {
        console.log('inner test A');
      },
      'test B': function () {
        console.log('inner test B');
      }
    },

		model: function() {
			assert.strictEqual(Accounts.prototype.model, Account);
		},

		url: function() {
			assert.strictEqual(Accounts.prototype.url, "/api/accounts");
		}
  });
});
