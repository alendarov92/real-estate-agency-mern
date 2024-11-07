import { Router } from 'express';
import homeController from './controllers/homeController.js'
import authController from './controllers/authController.js'

const router = Router();

router.use(homeController)
router.use('/auth', authController)


export default router;