import { BankType, AccountType } from "./types";

/**
 * Bank class implements the BankType interface
 * and stores accounts and usernames
 * and is able to create new accounts, deposit amount
 */

export class Bank implements BankType {

    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * 
     * @param accounts - a list of accounts to be stored in the bank
     * @param usernames - a list of bank verified usernames 
     * @returns a new Bank object
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }
    /**
     * 
     * @param username - a string representing the username
     * @returns true if the username exists in the bank, false otherwise
     */
    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * 
     * @param accountNumber - a nunber representing the account number
     * @returns a AccountType object if the account exists, undefined otherwise
     */
    private findAccount(accountNumber: number): AccountType | undefined {
        return this.accounts.find(account => account.id === accountNumber);
    }

    /**
     * 
     * @param accountNumber - a nunber representing the account number
     * @returns true if the account number has 10 digits, false otherwise
     */
    private isAccountNumberValid(accountNumber: number): boolean {
        return accountNumber.toString().length === 10;
    }

    /**
     * 
     * @param username - a string representing the username of the customer
     * @param age - a number representing the age of the customer
     * @param accountNumber - a number representing the account number of the customer that needs to be created
     * @returns a new Account of type AccountType
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        
        if(!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }

        if(!this.isAccountNumberValid(accountNumber)) {
            throw new Error('Invalid account number');
        }

        if(this.findAccount(accountNumber)) {
            throw new Error('Account already exists');
        }

        if(age < 18) {
            throw new Error('Age must be 18 or above');
        }

        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0
        }

        this.accounts.push(newAccount);
        return newAccount;
    }
    /**
     * 
     * @param username - a string representing the username of the customer
     * @param accountNumber - a number representing the account number to which amount needs to be deposited
     * @param deposit - a number representing the amount to be deposited to the account
     * @returns - the account with the updated balance
     */
    depositAmount(username: string, accountNumber: number, deposit: number): AccountType {
        if(!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }

        if(!this.findAccount(accountNumber)) {
            throw new Error('Account does not exist');
        }

        if(deposit < 0) {
            throw new Error('Deposit must be greater than 0');
        }

        const account = this.findAccount(accountNumber);
        account!.balance += deposit;
        return account!;

    }
    /**
     * 
     * @param username - a string representing the username of the customer
     * @param accountNumber - a number representing the account number from which amount needs to be withdrawn
     * @param amount - a number representing the amount to be withdrawn from the account
     * @returns - the account with the updated balance
     */
    withdrawAmount(username: string, accountNumber: number, amount: number): AccountType {
        if(!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }

        if(!this.findAccount(accountNumber)) {
            throw new Error('Account does not exist');
        }

        const account = this.findAccount(accountNumber);

        if(amount >  account!.balance) {
            throw new Error('Withdraw amount should be lesser than or equal to the balance');
        }

        account!.balance -= amount;
        return account!;
    }
}