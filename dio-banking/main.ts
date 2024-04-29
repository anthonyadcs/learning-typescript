import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(51556139810, 'Anthony', 10)
console.log(peopleAccount)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
console.log(companyAccount.accountNumber)