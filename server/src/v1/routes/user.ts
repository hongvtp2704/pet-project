import express, { Request, Response } from 'express';
import {UserController} from "../../controller";
import user from '../../service/user';
const router = express.Router();

router.get('/', UserController.getAllUsers);

export default router;
