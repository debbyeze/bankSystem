class Account {
    constructor(name, pin, balance = 0) {
        this.accountNumber = Math.floor(100000 + Math.random() * 900000);
        this.name = name;
        this.pin = pin;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid deposit amount";
    }

    withdraw(amount, pin) {
        if (pin !== this.pin) {
            return "Incorrect PIN";
        }
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid withdrawal amount or insufficient funds";
    }

    checkBalance(pin) {
        if (pin === this.pin) {
            return `Current balance: $${this.balance}`;
        }
        return "Incorrect PIN";
    }
}

module.exports = Account;