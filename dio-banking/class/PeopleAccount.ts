import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    //Com este super(), a ideia é como se estivessemos chamando o constructor da classe pai Account. É necessário para que sejam utilizados como os parâmetros da classe pai ACCOUNT.
    super(name, accountNumber)
    this.doc_id = doc_id;
  }
}