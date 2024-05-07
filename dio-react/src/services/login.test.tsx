import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    const mockEmail = 'anthony@gmail.com'
    window.alert = mockAlert
    
    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
    await login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}`)
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
})