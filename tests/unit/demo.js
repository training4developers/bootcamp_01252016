define([
  'intern!object',
  'intern/chai!assert',
  'backbone-faux-server'
], function (registerSuite, assert, fauxServer) {

  registerSuite({
    'passing test': function () {},
    'failing test': function () {
      throw new Error('Oops');
    }
  });

});
