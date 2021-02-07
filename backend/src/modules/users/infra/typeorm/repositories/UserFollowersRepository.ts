import IUserFollowersRepository from '@modules/users/repositories/IUserFollowersRepository';
import { getRepository, Repository } from 'typeorm';
import UserFollower from '../entities/UserFollower';

class UserFollowersRepository implements IUserFollowersRepository {
  private ormRepository: Repository<UserFollower>;

  constructor() {
    this.ormRepository = getRepository(UserFollower);
  }

  public async findUserFollowers(
    user_id: string,
  ): Promise<UserFollower[] | undefined> {
    const userFollowers = await this.ormRepository.find({
      where: { user_id },
    });

    return userFollowers;
  }
}

export default UserFollowersRepository;
