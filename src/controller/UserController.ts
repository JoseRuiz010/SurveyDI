import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UserService } from '../services/UserServices';
 
export class UserController {
  async getUser(req: Request, res: Response): Promise<Response> {
    const userService = container.resolve(UserService);
    const users = await userService.getUser();
    return res.json(users);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const userService = container.resolve(UserService);
    const user = await userService.getById(Number(req.params.id));
    if (user) {
      return res.json(user);
    }
    return res.status(404).json({ message: 'User not found' });
  }
}
