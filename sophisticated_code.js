/* sophisticated_code.js */

// This code is an implementation of a simple banking system with multiple features like account creation, balance checking, deposit, withdrawal, and transaction history.

class Bank {
    constructor() {
        this.accounts = [];
    }

    createAccount(name, initialBalance) {
        const account = new BankAccount(name, initialBalance);
        this.accounts.push(account);
        return account;
    }

    getAccount(accountNumber) {
        const account = this.accounts.find((acc) => acc.accountNumber === accountNumber);
        if (!account) {
            throw new Error("Account not found!");
        }
        return account;
    }
}

class BankAccount {
    static nextAccountNumber = 1;

    constructor(name, initialBalance) {
        this.accountNumber = BankAccount.nextAccountNumber++;
        this.name = name;
        this.balance = initialBalance;
        this.transactionHistory = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount!");
        }
        this.balance += amount;
        this.transactionHistory.push({
            type: "Deposit",
            amount: amount,
            date: new Date(),
        });
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) {
            throw new Error("Invalid withdrawal amount!");
        }
        this.balance -= amount;
        this.transactionHistory.push({
            type: "Withdrawal",
            amount: amount,
            date: new Date(),
        });
    }

    getBalance() {
        return this.balance;
    }

    getTransactionHistory() {
        return this.transactionHistory;
    }
}

// Example Usage:

const bank = new Bank();
const account1 = bank.createAccount("John", 1000);
const account2 = bank.createAccount("Jane", 500);

console.log("Account1 Balance:", account1.getBalance());
console.log("Account2 Balance:", account2.getBalance());

account1.deposit(500);
account2.withdraw(200);

console.log("Account1 Balance:", account1.getBalance());
console.log("Account2 Balance:", account2.getBalance());

console.log("Account1 Transaction History:", account1.getTransactionHistory());
console.log("Account2 Transaction History:", account2.getTransactionHistory());