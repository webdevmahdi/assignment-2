import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();
router.post('/users', UserController.createUserController);
router.get('/users', UserController.getUserController)

export const UserRouter = router;