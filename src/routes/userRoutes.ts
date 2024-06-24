import { Router } from 'express';
import { UserController } from '../controller/UserController';
 
const router = Router();
const userController = new UserController();

router.get('/users', userController.getUser);
router.get('/users/:id', userController.getById);

export default router;
