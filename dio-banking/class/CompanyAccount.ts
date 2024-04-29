import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = () => {
    console.log('Você pegou um empréstimo')
  }

  //Este é o polimorfismo. Com base nele, podemos alterar a assinatura de um método ou o fluxo de um método, fazendo com que a mesma chamada de método possa resultar em retornos diferentes, mesmo com a classe primordial definindo este método anteriormente.
  deposit = () :number => {
    return 1
  }
}