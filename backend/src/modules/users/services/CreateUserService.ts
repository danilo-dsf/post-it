import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  birthdate: Date;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    name,
    phone,
    email,
    birthdate,
    password,
  }: IRequest): Promise<User> {
    const checkIfUserExists = await this.usersRepository.findByEmail(email);

    if (checkIfUserExists) {
      throw new AppError('Esse endereço de e-mail já está em uso');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      phone,
      email,
      birthdate,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
