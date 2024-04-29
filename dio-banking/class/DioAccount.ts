//Aqui, colocamos a ideia da Abstração, onde colocamos em prática as ideias que tivemos sobre o que é necessário para criação de uma conta no DIO BANKING (as ideias estão no caminho /dio-banking/abstracao.md)

//A classe Abstrata, em forma simples, é uma classe que não pode ser instânciada, isto é, ele não pode ser inicializada de forma direta.
export abstract class DioAccount{

  //Uma propriedade privada só pode ser alterada dentro do seu próprio objeto. Isto é, não pode ser chamada de outra forma (como no exemplo abaixo seria possível com "peopleAccount.name = 'Alterado'").
  private name: string

  //Com readonly, a propriedade age um pouco diferente da propriedade privada. Ela não pode ser alterada, podendo ser instânciada apenas no momento de sua invocação. Porém, é possível que ela seja exibida, o que não acontece com as propriedas privadas.
  readonly accountNumber: number
  balance: number = 0
  status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  //Método para alterar uma propriedade 
  setName = (name: string): void => {
    this.name = name;
    console.log('New name saved!')
  }

  deposit = () :void => {
    if(this.validateStatus()){
      console.log(`Seu depósito foi finalizado, ${this.name}!`)
    }
  }

  withdraw = () :void => {
    console.log(`Seu saque foi finalizado, ${this.name}!`)
  }

  getBalance = () :void => {
    console.log(this.balance)
  }

  //Aqui, é como definimos uma função como privada. Da mesma forma que propriedades normais.
  private validateStatus = (): boolean => {
    if(this.status){
      return this.status
    }

    throw new Error('Conta inválida')
  }
}