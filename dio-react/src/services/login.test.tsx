import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    const mockEmail = 'anthony@gmail.com'
    window.alert = mockAlert
    
    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}`)
    })
})