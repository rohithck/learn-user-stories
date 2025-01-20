import { Bank } from '../src/bank';

// setup

const accounts = [{ id: 1234567890, balance: 3448 },
{ id: 1234567891, balance: 2424 }];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);

// Scenario 1: customer is able to create a new bank account
const acc = bank.createAccount('user1', 23, 1234567892);

if (acc.id != 1234567892 || acc.balance !== 0 || acc.id.toString().length != 10 ) {
    console.log('Scenario 1 Failed');
}
else {
    console.log('Scenario 1 Passed');
}

try {
    const acc1 = bank.createAccount('user1', 23, 1234567892);
    console.log('Scenario 1 Failed');
}
catch(e) {
    console.log('Scenario 1 Passed');
}


// Scenario 2: customer is unable to create a new bank account due to invalid age

try {
    bank.createAccount('user1', 17, 1234567893);
    console.log('Scenario 2 Failed');
}
catch(e) {
    console.log('Scenario 2 Passed');
}

// Scenario 3: Customer is unable to create a new bank account due to invalid username

try {
    bank.createAccount('user3', 23, 1234567894);
    console.log('Scenario 3 Failed');
}
catch(e) {
    console.log('Scenario 3 Passed');
}

