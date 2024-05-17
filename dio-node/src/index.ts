import { UserController } from "./UserControllers/UserController";
import express, {Request, Response} from 'express';


const db = [
  {
    name: 'test',
    email: 'test@example.com'
  }
]

const userController = new UserController()


const server = express();

server.use(express.json())

server.get('/', (req: Request, res: Response) => {
  return res.status(200).json({message: 'DioBank API'});
})

server.post('/user', userController.createUser)

server.listen(5000, () => {
  console.log('Server on')
});