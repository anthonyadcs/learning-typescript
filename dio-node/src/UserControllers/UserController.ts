  import { Request, Response } from 'express'

  const db = [
    {
      name: 'test',
      email: 'test@example.com'
    }
  ]
  
  export class UserController{
    createUser = (req: Request, res: Response) => {
      const user = req.body;
      db.push(user)
      console.log(db)
      return res.status(201).json({message: 'User created'});
    }
  }