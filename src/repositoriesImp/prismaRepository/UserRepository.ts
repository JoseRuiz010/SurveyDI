import { injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/repositories/UserRepository';
import User from '../../domain/entitiies/User';
import prisma from '../../config/prisma';
  
@injectable()
export class UserRepository implements IUserRepository {
  async getUser(): Promise<User[]> {
    console.log('getPrisma')

    const users = await prisma.user.findMany();
    return users.map(user => new User(user.id, user.name, user.email, user.password));
  }

  async getById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (user) {
      return new User(user.id, user.name, user.email, user.password);
    }
    return null;
  }
}
