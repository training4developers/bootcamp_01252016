define([
  'intern!object',
  'sinon',
  'intern/chai!assert',
  'app/models/account',
  'backbone-faux-server'
], function (registerSuite, sinon, assert, Account, fauxServer) {

  var account;


  registerSuite({
    name: 'account Model',

    'fields': {

			idAttribute: function() {
				assert.strictEqual(Account.prototype.idAttribute, "_id");
			},

			urlRoot: function() {
				assert.strictEqual(Account.prototype.urlRoot, "/api/accounts");
			}
    },

    'functions': {

      beforeEach: function() {

				account = new Account({
          emailAddress: "bob.smith@somedomain.com",
					firstName: "Bob",
					lastName: "Smith"
				});

      },

      afterEach: function() {
        //account = undefined;
      },

      getName: function () {

        // arrange
        var EXPECTED_VALUE = "Bob Smith";

        // act
        var actualValue = account.getName();

        // assert
				assert.strictEqual(actualValue , EXPECTED_VALUE);
      },

      getRecordTitle: function() {

        sinon.spy(account, "getName");

				assert.strictEqual(account.getRecordTitle(), "bob.smith@somedomain.com Bob Smith");
        assert.isTrue(account.getName.calledOnce);

      }

    },

    'ajax': {

      setup: function () {

        fauxServer
          .get("/api/accounts/:id", function (context, accountId) {

              return new Account({
                _id: parseInt(accountId, 10),
                emailAddress: "test@somedomain.com",
                firstName: "Jim",
                lastName: "Bob"
              }).toJSON();

          })
          .put("/api/accounts/:id", function (context, accountId) {
              return new Account(context.data).toJSON();
          })
          .del("/api/accounts/:id", function (context, accountId) {

              return new Account({
                _id: parseInt(accountId, 10),
                emailAddress: "test@somedomain.com",
                firstName: "Jim",
                lastName: "Bob"
              }).toJSON();
          });

      },

      teardown: function () {
        fauxServer.removeRoutes();
      },

      fetch: function() {

        var
          a = this.async(1000),
          modelId = 1,
          account = new Account({
            _id: modelId
          });

        account.fetch({
          success: a.callback(function(model) {
              assert.strictEqual(model.id, modelId);
          })
          //success: function(model) {
          //  assert.strictEqual(model.id, 3); // modelId);
          //}
        })

      }
    }
  });
});
