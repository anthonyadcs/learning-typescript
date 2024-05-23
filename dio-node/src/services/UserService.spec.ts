import { UserService, IUser } from "./UserService";

describe('UserService', () => {
  const mockDB: IUser[] = []
  const userService = new UserService(mockDB);

  it('Deve adicionar um novo usuário', () => {
    userService.createUser('userservicetest', 'userservicetest@example.com')
  })
})