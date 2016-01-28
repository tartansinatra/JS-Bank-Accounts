var Account = require('./bank_account');
var assert = require('assert');


describe('bank account', function(){
  var account1 = new Account('Alice Bainbridge', 'personal', 125.00);

  it('has a name', function(){
    assert.equal('Alice Bainbridge', account1.name)
  });
  it('can add an account', function(){
    assert.equal('J Smith', account2.name);
  });
  it('can find an account by name', function(){
    assert.equal('J Smith', account.name);
  })
})