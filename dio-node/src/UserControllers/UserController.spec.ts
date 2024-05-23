import { UserController } from "./UserController";
import { UserService } from '../services/UserService';
import {makeMockRequest} from '../__mock__/mockRequest.mock'
import {makeMockResponse} from '../__mock__/mockResponse.mock'
import {Request} from 'express'

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
      createUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService)

    it('deve adicionar um novo usuário', () => {
      const mockRequest = {
        body: {
          name: 'insert by test',
          email: 'insertbytest@example.com'
        }
      } as Request

      const mockResponse = makeMockResponse()
      userController.createUser(mockRequest, mockResponse)

      expect(mockResponse.state.status).toBe(201)
      expect(mockResponse.state.json).toEqual({message: 'Usuário criado'})
    })
})