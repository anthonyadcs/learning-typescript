import { UserController } from "./UserController";
import { UserService } from '../services/UserService';
import {makeMockRequest} from '../__mock__/mockRequest.mock'
import {makeMockResponse} from '../__mock__/mockResponse.mock'
import {Request} from 'express'

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
      deleteUser: jest.fn(),
    }

    const userController = new UserController(mockUserService as UserService)
  
    describe('createUser', () => {
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
        expect(mockResponse.state.json).toEqual({message: 'user created'})
      })
  
      it('Deve retornar uma mensagem de erro se nome ou email não forem informados', () => {
        const mockRequest = {
            body: {
                name: 'aaaa',
                email: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'bad request! name or email not filled in'})
      })
    })

  describe('getAllUsers', () => {
      it('deve chamar a função getAllUsers', () => {
          const mockRequest = {body: {} } as Request
          const mockResponse = makeMockResponse()
          userController.getAllUsers(mockRequest, mockResponse)
          expect(mockResponse.state.status).toBe(200)
      })
  })

  describe('deleteUser', () => {
      it('deve excluir o usuário informado', () => {
          const mockRequest = {body: {
              name: "req test",
              email: "reqtest@example.com",
          }} as Request;

          const mockResponse = makeMockResponse();

          userController.deleteUser(mockRequest, mockResponse)
          expect(mockResponse.state.status).toBe(202)
          expect(mockResponse.state.json).toMatchObject({message: 'user deleted'})
      })
  })
})