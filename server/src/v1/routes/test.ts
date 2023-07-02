import express, {Request, Response, Router} from "express";
const testRouter = Router();
import * as userService from '../../service/user.service';

export default testRouter.get('/test', (req: Request, res: Response)=> {
    const body = req.body;
    const result = userService.Create(body);
    console.log(result);
    res.send(result);
});