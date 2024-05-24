import { UserController } from "./../UserControllers/UserController";
import {Router} from 'express';

export const router = Router()
const userController = new UserController()

router.get('/user', userController.getAllUsers)
router.post('/user', userController.createUser)
router.delete('/user', userController.deleteUser)