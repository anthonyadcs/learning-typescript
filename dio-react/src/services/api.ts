//SIMULA UMA API

const conta = {
  email: 'anthony@gmail.com',
  password: '123456',
  name: 'Anthony',
  balance: '2000'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1500);
})