import express from 'express';
import {UserController} from "../../controller";
const router = express.Router();
import { authorization } from '../../middlewares/authen';

router.get('/',authorization ,UserController.getAllUsers);
router.post('/login',UserController.login);
router.post('/signup',UserController.create);

export default router;
