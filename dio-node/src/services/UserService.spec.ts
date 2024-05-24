import { UserService, IUser } from "./UserService";

describe('UserService', () => {
  const mockDB: IUser[] = []
  const userService = new UserService(mockDB);

  describe('createUser', () => {
    it('Deve adicionar um novo usuário', () => {
      userService.createUser('userservicetest', 'userservicetest@example.com')
    })
  })

  describe('getAllUsers', () => {
    it('Deve retornar a database', () => {
      userService.getAllUsers()
    })
  })

  describe('deleteUser', () => {
    userService.deleteUser('userservicetest', 'userservicetes@example.com')
  })
})