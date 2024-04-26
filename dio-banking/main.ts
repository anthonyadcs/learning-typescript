import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(51556139810, 'Anthony', 10)
peopleAccount.deposit()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit())