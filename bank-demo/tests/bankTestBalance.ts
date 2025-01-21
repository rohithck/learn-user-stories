// Tests the ability to check balance
import { Bank } from '../src/bank';

// setup

const accounts = [{ id: 1234567890, balance: 3448 },
{ id: 1234567891, balance: 2424 }];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);

// Scenario 1: customer is able to check the balance in the account

const balance = bank.getBalance('user1', 1234567890)

if (balance != 3448) {
    console.log('Scenario 1 Failed');
}
else {
    console.log('Scenario 1 Passed');
}

// Scenario 2: customer is unable to view balance in the account due to invalid account number

try {
    bank.getBalance('user1', 1234567893)
    console.log('Scenario 2 Failed');
}
catch(e) {
    console.log('Scenario 2 Passed');
}

// Scenario 3: customer is unable to view balance in the account due to invalid username

try {
    bank.getBalance('user8', 1234567890)
    console.log('Scenario 3 Failed');
}
catch(e) {
    console.log('Scenario 3 Passed');
}
