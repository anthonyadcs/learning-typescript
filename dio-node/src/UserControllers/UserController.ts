  import { Request, Response } from 'express'
  import { UserService } from '../services/UserService'

  export class UserController{
    userService: UserService;
    
    constructor(userService = new UserService()){
      this.userService = userService;
    }

    createUser = (req: Request, res: Response) => {
      const user = req.body;

      if(!user.name || !user.email) {
        return res.status(400).json({message: 'Bad Request: Login inválido.'})
      }

      this.userService.createUser(user.name, user.email)
      return res.status(201).json({message: 'Usuário criado'});
    }

    getAllUsers = (req: Request, res: Response) => {
      const users = this.userService.getAllUsers()
      return res.status(200).json(users)
    }
  }