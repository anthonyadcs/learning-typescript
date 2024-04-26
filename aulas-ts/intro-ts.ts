//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT
//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT
//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT

//DECLARAÇÃO DE VARIÁVEIS
var a = 'a' //Não é mais utilizado
let b = 'b'
const c = 'c'

//DECLARAÇÃO DO TIPO DAS VARIÁVEIS

let d :string = 'b';
let e :number = 2;
let f :boolean = true;

let g: string | number = 2; // TIPO STRING **OU** NUMBER
g = 3;

let h: any = 'Pedro';
h = 3;
h = false;

//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//
//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//
//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//SINTAXE BÁSICA DO TYPESCRIPT//


//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES
//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES
//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES

//DECLARAÇÃO DE UM TIPO DE OBJETO//DECLARAÇÃO DE UM TIPO DE OBJETO//DECLARAÇÃO DE UM TIPO DE OBJETO

//Declara como o objeto deve ser declarado e o tipo de suas propriedades
interface Pessoa{
  //Abaixo, estas são as propriedades OBRIGATÓRIAS ao se declarar uma nova Pessoa.
  nome: string,
  idade: number,

  //Abaixo, a interrogação após o nome da propriedade faz com que ela se torne NÃO OBRIGATÓRIA, ou seja, OPCIONAL
  profissao?: string,
}

const pessoa: Pessoa = {
  nome: 'Pedro',
  idade: 18,
}

const outraPessoa: Pessoa = {
  nome: 'Paulo',
  idade: 25,
  profissao: 'desenvolvedor'
}

//Abaixo, a ideia por trás de criar um objeto com um array de pessoa é declarar seu tipo como Pessoa[]. Isto quer dizer que o ARRAY[] criado irá RECEBER objetos do tipo Pessoa
const arrayPessoa: Pessoa[] = [
  pessoa,
  outraPessoa
]

//Há outra forma de declarar o código acima.
const arrayPessoa2: Array<Pessoa> = [
  pessoa,
  outraPessoa
]

const arrayNum: number[]= [
  1, 2, 3
]

const arrayString: Array<string> = [
  '1', '2', '3'
]

//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES
//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES
//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES//OBJETOS E INTERFACES

//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO
//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO
//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO
// const num: number = 16;

// if(num > 15){
  //   console.log('Num maior que 15')
  // } else{
    //   console.log('Num menor que 15')
    // }
    
    const typeUser = {
      admin: 'Seja bem vindo, Admin',
      estudante: 'Seja bem vindo, Estudante',
      viewer: 'Seja bem vindo, Viewer',
}

function validateUser(user: string){
  console.log(typeUser[user as keyof typeof typeUser])
  /*Neste caso, para receber o valor da mensagem de acordo com o usuário que é chamado, é necessário a sintaxe acima.
  De forma simples, o que ela quer dizer é:
  
  user as keyof typeof typeUser
  a variável pode ser uma usada como chave do tipo do meu objeto 
  **(user)**        **(as keyof)**      **(typeof)**   **(typeUser)**
  */  
}
const usuario = 'estudante'

// validateUser(usuario)

for(let i = 0; i <5; i++){
  break
}

let n = 2
while(n < 6){
  break
}

//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO
//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO
//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO//ESTRUTURAS DE DECISÃO E REPETIÇÃO

//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS
//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS
//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS

//Formas de declaração do tipo do array é feito da mesma forma que a citada acima
const array: Array<number> = [1, 2, 3, 4];
const stringArray: string[] = ['a', 'b', 'c', 'd'];

//MANIPULAÇÃO DE ARRAY//MANIPULAÇÃO DE ARRAY//MANIPULAÇÃO DE ARRAY//MANIPULAÇÃO DE ARRAY//MANIPULAÇÃO DE ARRAY

//Achar elemento dentro de um array
//Retorna sempre o primeiro elemento que atenda a condição passada
const buscaNum = array.find(num => num > 4)

//Itera sobre cada elemento dentro do array

array.forEach(num => console.log(num))