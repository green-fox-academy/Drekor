'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
export = {
  getNameAndBalance,
  transferAmount,
  accounts
};

function getNameAndBalance(accountNumber: number): any[] {
  let temp: any[] = [];
  for (let snow = 0; snow < accounts.length; snow++) {
    if (accounts[snow].accountNumber == accountNumber) {
      temp.push(accounts[snow].clientName, accounts[snow].balance);
    }
  }
  console.log(temp);
  return temp;
}
getNameAndBalance(11234543);

function transferAmount(account: any[], fromAccountNumber: number, toAccountNumber: number, amountOfCashTransfer): any {
  for (let fromIndex = 0; fromIndex < account.length; fromIndex++) {
    for (let toIndex = 0; toIndex < account.length; toIndex++) {
      if (fromAccountNumber == account[fromIndex].accountNumber && toAccountNumber == account[toIndex].accountNumber) {
        account[fromIndex].balance -= amountOfCashTransfer, account[toIndex].balance += amountOfCashTransfer;
        return account;
      }
    }
  }
}

console.log(transferAmount(accounts, 43546731, 23456311, 500.0));