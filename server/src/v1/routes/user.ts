import express, { Request, Response } from 'express';
import {UserController} from "../../controller";
import user from '../../service/user';
const router = express.Router();
import { authtorization } from '../../middlewares/authen';

router.get('/',authtorization ,UserController.getAllUsers);
router.post('/login',UserController.login);

export default router;
