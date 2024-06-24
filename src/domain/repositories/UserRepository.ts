import User from "../entitiies/User";

export interface IUserRepository {
  getUser(): Promise<User[]>;
  getById(id: number): Promise<User | null>;
}
