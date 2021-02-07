import UserFollower from '../infra/typeorm/entities/UserFollower';

export default interface IUserFollowersRepository {
  findUserFollowers(user_id: string): Promise<UserFollower[] | undefined>;
}
