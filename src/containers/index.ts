import 'reflect-metadata';
import { container } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/UserRepository';
import { UserRepository } from '../repositoriesImp/prismaRepository/UserRepository';
import {UserRepository as mongoUserRepository  } from '../repositoriesImp/mongoRepository/UserRepository';


container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
// container.registerSingleton<IUserRepository>('UserRepository', mongoUserRepository);
