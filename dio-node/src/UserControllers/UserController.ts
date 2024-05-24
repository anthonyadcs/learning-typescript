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
        return res.status(400).json({message: 'bad request! name or email not filled in'})
      }

      this.userService.createUser(user.name, user.email)
      return res.status(201).json({message: 'user created'});
    }

    getAllUsers = (req: Request, res: Response) => {
      const users = this.userService.getAllUsers()
      return res.status(200).json(users)
    }

    deleteUser = (req: Request, res: Response) => {
      const user = req.body
      this.userService.deleteUser(user.name, user.email)
      return(res.status(202).json({ message: 'user deleted'}))
    }
  }