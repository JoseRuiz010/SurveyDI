import User from "../../domain/entitiies/User";
import { IUserRepository } from "../../domain/repositories/UserRepository";
import mongoUser from '../../models/mongoose/User'
export class UserRepository implements IUserRepository {
    async getUser(): Promise<User[]> {
        console.log('getMongo')
        const users = await mongoUser.find();
        return users.map((u,i) => new User(i, u.name, u.email, u.password))
    }
    async getById(id: number): Promise<User | null> {
        const user = await mongoUser.findById(id);
        if (user) {
            return new User(1, user.name, user.email, user.password);
        }
        return null;
    }

}