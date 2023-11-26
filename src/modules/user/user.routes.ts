import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();
router.post('/users', UserController.createUserController)

export const UserRouter = router;