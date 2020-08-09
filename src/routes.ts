import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ToolController from './modules/tools/controllers/ToolController';
import UsersController from './modules/users/controllers/UserController';
import SessionController from './modules/users/controllers/SessionController';
import ensureAuthenticated from './shared/middlewares/ensureAuthenticated';

const router = Router();

const toolController = new ToolController();
const userController = new UsersController();
const sessionController = new SessionController();

router.post(
  '/users',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);
router.post(
  '/session',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.create,
);

router.use(ensureAuthenticated);

router.post(
  '/tools',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      link: Joi.string().required(),
      description: Joi.string().required(),
      tags: Joi.array().required(),
    },
  }),
  toolController.create,
);

router.get('/tools/all', toolController.index);

router.get(
  '/tools/:tag',
  celebrate({
    [Segments.PARAMS]: {
      tag: Joi.string().required(),
    },
  }),
  toolController.show,
);

router.delete(
  '/tools/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  toolController.delete,
);

export default router;
