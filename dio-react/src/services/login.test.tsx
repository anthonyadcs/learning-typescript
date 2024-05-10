import { login } from "./login"

// Bloco de testes para a função login
describe('login', () => {
    // Email de exemplo para os testes
    const mockEmail = 'anthony@gmail.com'
    
    // Teste para verificar se o login é válido com um email correto
    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
    // Chama a função login com o email de exemplo
    const response = await login(mockEmail)
    // Verifica se a resposta é truthy (verdadeira)
    expect(response).toBeTruthy()
})

// Teste para verificar se o login é inválido com um email incorreto
it('Deve exibir um erro caso o email seja inválido', async () => {
    // Chama a função login com um email inválido
    const response = await login('email@invalido.com')
    // Verifica se a resposta é falsy (falsa)
    expect(response).toBeFalsy()
    })
})