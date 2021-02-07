import GetAllUserFollowersService from '@modules/users/services/GetAllUserFollowersService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

export default class UserFollowersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const getUserFollowers = container.resolve(GetAllUserFollowersService);

    const userFollowers = await getUserFollowers.execute({ user_id });

    return response.json(userFollowers);
  }
}
