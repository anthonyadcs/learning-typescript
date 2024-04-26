//Aqui, colocamos a ideia da Abstração, onde colocamos em prática as ideias que tivemos sobre o que é necessário para criação de uma conta no DIO BANKING (as ideias estão no caminho /dio-banking/abstracao.md)

//A classe Abstrata, em forma simples, é uma classe que não pode ser instânciada, isto é, ele não pode ser inicializada de forma direta.
export abstract class DioAccount{
  name: string
  accountNumber: number
  balance: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () :void => {
    console.log(`Seu saque foi finalizado, ${this.name}!`)
  }

  withdraw = () :void => {
    console.log(`Seu saque foi finalizado, ${this.name}!`)
  }

  getBalance = () :void => {
    console.log(this.balance)
  }
}