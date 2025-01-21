// Tests the ability to withdraw Amount
import { Bank } from '../src/bank';

// setup

const accounts = [{ id: 1234567890, balance: 3448 },
{ id: 1234567891, balance: 2424 }];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);


// Scenario 1: customer is able to withdraw money from the account

const acc = bank.withdrawAmount('user1', 1234567890, 102)

if (acc.balance != 3346) {
    console.log('Scenario 1 Failed');
}
else {
    console.log('Scenario 1 Passed');
}

// Scenario 2: customer is unable to withdraw money from the account due to invalid amount

try {
    bank.withdrawAmount('user1', 1234567890, 5000)
    console.log('Scenario 2 Failed');
}
catch(e) {
    console.log('Scenario 2 Passed');
}

// Scenario 3: customer is unable to withdraw money from the account due to invalid account number

try {
    bank.withdrawAmount('user1', 1234567892, 1000)
    console.log('Scenario 3 Failed');
}
catch(e) {
    console.log('Scenario 3 Passed');
}

// Scenario 4: customer is unable to withdraw money from the account due to invalid username

try {
    bank.withdrawAmount('user9', 1234567890, 1000)
    console.log('Scenario 4 Failed');
}
catch(e) {
    console.log('Scenario 4 Passed');
}