var Account = function(name, type, balance){
  this.name = name;
  this.type = type;
  this.balance = balance;
}

Account.prototype = {
  addAccount: function(){
    account2 = Account.create({}, {account: {name:'J Smith', type:'personal', balance: 85.50}});
  }, 
  findAccount: function(){
    for(item in this.items) {
        console.log(item + " = " + account[name]);
    }
    
}



module.exports = Account;