import express, { Request, Response } from 'express';
import {UserController} from "../../controller";
const router = express.Router();

router.get('/', UserController.getAllUsers);
export default router;
