import { Router } from 'express';
import ToolController from './controllers/ToolController';

const router = Router();

const toolController = new ToolController();

router.post('/tools', toolController.create);
router.get('/tools', toolController.index);
router.get('/tools/tag/:tag', toolController.show);
router.delete('/tools/:id', toolController.delete);

export default router;
