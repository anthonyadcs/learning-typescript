  import { Request, Response } from 'express'
  import { UserService } from '../services/UserService'
  
  const userService = new UserService;

  export class UserController{
    createUser = (req: Request, res: Response) => {
      const user = req.body;

      if(!user.name || !user.email) {
        return res.status(400).json({message: 'Bad Request: Login inválido.'})
      }

      userService.createUser(user.name, user.email)
      return res.status(201).json({message: 'User created'});
    }

    getAllUsers = (req: Request, res: Response) => {

      const users = userService.getAllUsers()
      return res.status(200).json(users)
    }
  }