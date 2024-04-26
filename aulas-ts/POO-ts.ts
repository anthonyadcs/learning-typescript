//O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? 
//O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? 
//O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? 

/*
É um paradigma de programação baseado no coneito de objetos, que podem conter dados na forma como atributos e códigos, na forma de procedimentos, como métodos.
*/

const user1 = {
  name: 'Anthony',
  age: 22,
  showName(){
    console.log(this.name)
  }
}

const otherUser1 = {
  name: 'Marcos',
  age: 27,
  showName(){
    console.log(this.name)
  }
}

//Não é performático criar um objeto para cada usuário novo. Para isto usamos a CLASSE

//A classe é uma forma para objetos que podemos instânciar. 
class User{
  name: string = 'Mario'
  age: number = 29

  //Com o método CONSTRUCTOR, sempre que eu quiser INSTANCIAR um novo USER, eu preciso passar os parâmetros inseridos no CONSTRUCTOR
  constructor(name: string, age: number){
    //THIS: Quando passado dentro de uma classe, é utilizado para realizar alguma ação com o método DESTE objeto em específico. Também é utilizado para acessar MÉTODOS INTERNOS do objeto.
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name)
  }
}

const user2 = new User('Anthony', 21)
const otherUser2 = new User('Paulo', 27)

//O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? 
//O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? 
//O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? //O QUE É POO? 

//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS
//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS
//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS//CLASSES E TIPOS

/* O que é ABSTRAÇÃO?

  Abstração é a CAPACIDADE de conseguir PENSAR no objeto que iremos criar e COMO IMPLEMENTAR seus MÉTODOS e ATRIBUTOS
*/

/* O que é HERANÇA?

  Permite que a classe COMPARTILHE CARACTERÍSITCAS com outra. Usada para EVITAR REPETIÇÃO, reaproveitando atributos e métodos.
*/

/* O que é POLIMORFISMO?

  Permite que a classe filha CHAME um MÉTODO com ASSINATURA DIFERENTE. Ou seja, o FLUXO DO MÉTODO é diferente comparado ao original.
*/