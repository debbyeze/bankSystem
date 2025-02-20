const Bank = require("../models/bank");
const bank = new Bank();

exports.createAccount = (req, res) => {
    const { name, pin, initialDeposit } = req.body;
    const account = bank.createAccount(name, pin, initialDeposit);
    res.json({ message: "Account created!", accountNumber: account.accountNumber });
};