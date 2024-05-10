// Dados da conta de exemplo
const conta = {
  email: 'anthony@gmail.com',
  password: '123456',
  name: 'Anthony',
  balance: '2000,00',
  ID: '1',
}

// Simula uma chamada assíncrona à API que retorna os dados da conta após 1.5 segundos
export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1500);
})