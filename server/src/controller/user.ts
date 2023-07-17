import {UserService} from '../service';
import { Request, Response } from 'express';
import user from '../service/user';
import * as bcrypt from "bcrypt";

class UserController {
    getAllUsers = ()=> {
        try{
            return UserService.getAllUsers();
        }catch (err){
            console.log('controller',err)
        }

    };

    login = async (req: Request, res: Response) => {
        try {
            const username: string | any = req.body.username;
            const password: string | any = req.body.password;

            const user = await UserService.findUser(username);
            
        } catch(err) {
            console.log('controller', err);
        }
    };
}

export default new UserController()