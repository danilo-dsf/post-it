import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import UserFollower from '../infra/typeorm/entities/UserFollower';
import IUserFollowersRepository from '../repositories/IUserFollowersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class GetAllUserFollowersService {
  constructor(
    @inject('UserFollowersRepository')
    private userFollowersRepository: IUserFollowersRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<UserFollower[] | undefined> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const userFollowers = await this.userFollowersRepository.findUserFollowers(
      user_id,
    );

    return userFollowers;
  }
}

export default GetAllUserFollowersService;
