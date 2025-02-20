const Account = require("./account");

class Bank {
    constructor() {
        this.accounts = {};
    }

    createAccount(name, pin, initialDeposit = 0) {
        const account = new Account(name, pin, initialDeposit);
        this.accounts[account.accountNumber] = account;
        return account;
    }

    transfer(fromAcc, toAcc, amount, pin) {
        const sender = this.accounts[fromAcc];
        const receiver = this.accounts[toAcc];

        if (!sender || !receiver) {
            return "Invalid account number(s)";
        }
        if (sender.pin !== pin) {
            return "Incorrect PIN";
        }
        if (sender.balance >= amount) {
            sender.balance -= amount;
            receiver.balance += amount;
            return `Transfer successful! ${fromAcc} -> ${toAcc}: $${amount}`;
        }
        return "Insufficient funds";
    }
}

module.exports = Bank;
