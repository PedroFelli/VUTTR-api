import { Router } from 'express';
import ToolController from './modules/tools/controllers/ToolController';
import UsersController from './modules/users/controllers/UserController';
import SessionController from './modules/users/controllers/SessionController';
import ensureAuthenticated from './shared/middlewares/ensureAuthenticated';

const router = Router();

const toolController = new ToolController();
const userController = new UsersController();
const sessionController = new SessionController();

router.post('/users', userController.create);
router.post('/session', sessionController.create);

router.use(ensureAuthenticated);

router.post('/tools', toolController.create);
router.get('/tools', toolController.index);
router.get('/tools/tag/:tag', toolController.show);
router.delete('/tools/:id', toolController.delete);

export default router;
