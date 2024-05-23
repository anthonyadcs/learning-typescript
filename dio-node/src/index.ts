import { router } from "./services/routes";
import { UserController } from "./UserControllers/UserController";
import express, {Request, Response} from 'express';

const server = express();
server.use(express.json())
server.use(router)


const userController = new UserController()

server.get('/', (req: Request, res: Response) => {
  return res.status(200).json({message: 'DioBank API'});
})



server.listen(5000, () => {
  console.log('Server on')
});