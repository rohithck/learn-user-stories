export type AccountType = {
    id: number,
    balance: number
}

export interface BankType {
    createAccount(username: string, age: number, accountNumber: number): AccountType
}

export interface BankType {
    depositAmount(username: string, accountNumber: number, deposit: number): AccountType
}

export interface BankType {
    withdrawAmount(username: string, accountNumber: number, amount: number): AccountType
}

export interface BankType {
    getBalance(username: string, accountNumber: number): number
}