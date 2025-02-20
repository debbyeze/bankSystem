exports.deposit = (req, res) => {
    const { accountNumber, amount } = req.body;
    if (bank.accounts[accountNumber]) {
        res.json({ message: bank.accounts[accountNumber].deposit(amount) });
    } else {
        res.status(404).json({ error: "Account not found" });
    }
};

exports.withdraw = (req, res) => {
    const { accountNumber, amount, pin } = req.body;
    if (bank.accounts[accountNumber]) {
        res.json({ message: bank.accounts[accountNumber].withdraw(amount, pin) });
    } else {
        res.status(404).json({ error: "Account not found" });
    }
};

exports.transfer = (req, res) => {
    const { fromAcc, toAcc, amount, pin } = req.body;
    res.json({ message: bank.transfer(fromAcc, toAcc, amount, pin) });
};

exports.checkBalance = (req, res) => {
    const { accountNumber, pin } = req.body;
    if (bank.accounts[accountNumber]) {
        res.json({ message: bank.accounts[accountNumber].checkBalance(pin) });
    } else {
        res.status(404).json({ error: "Account not found" });
    }
};
