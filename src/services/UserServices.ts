import { injectable, inject } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/UserRepository';
import User from '../domain/entitiies/User';
 
@injectable()
export class UserService {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository
  ) {}

  async getUser(): Promise<User[]> {
    return await this.userRepository.getUser();
  }

  async getById(id: number): Promise<User | null> {
    return await this.userRepository.getById(id);
  }
}
