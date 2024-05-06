//SIMULA UMA API

const conta = {
  email: 'anthony@gmail.com',
  password: '123456',
  name: 'Anthony'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000);
})