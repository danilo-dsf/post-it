import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UserFollowersController from '../controllers/UserFollowersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const followersRouter = Router();
const userFollowersController = new UserFollowersController();

followersRouter.use(ensureAuthenticated);

followersRouter.get(
  '/:user_id',
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().required(),
    },
  }),
  userFollowersController.index,
);

export default followersRouter;
