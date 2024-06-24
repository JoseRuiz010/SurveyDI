import 'reflect-metadata';
import { container } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/UserRepository';
import { UserRepository } from '../repositoriesImp/prismaRepository/UserRepository';


container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
