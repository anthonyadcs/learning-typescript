import {login} from './login'

  describe('login', () => {

    const mockPrompt = jest.fn();
    window.prompt = mockPrompt
    it('Deve exibir um prompt com boas vindas', ()=> {
      login()
      expect(mockPrompt).toHaveBeenCalledWith('Bem vindo!')
    })
  })
