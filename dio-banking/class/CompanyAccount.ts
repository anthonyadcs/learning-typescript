import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = () => {
    console.log('Você pegou um empréstimo')
  }

  deposit = () :number => {
    return 1
  }
}