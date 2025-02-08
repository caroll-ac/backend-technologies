// Criação de classe que lide com dados bancários
var Account = /** @class */ (function () {
    function Account(value, holder) {
        this.value = value;
        this.holder = holder;
    } //end constructor
    Account.prototype.addAmount = function (amount) {
        this.value += amount;
    };
    Account.prototype.removeAmount = function (amount) {
        this.value -= amount;
    };
    Account.prototype.getValue = function () {
        return this.value;
    };
    Account.prototype.getHolderName = function () {
        return this.holder;
    };
    return Account;
}()); //end class
var account = new Account(0, "Diego");
account.addAmount(100);
account.removeAmount(10);
console.log("Saldo atual: R$", account.getValue());
