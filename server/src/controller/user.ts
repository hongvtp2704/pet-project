import {UserService} from '../service';
import { Request, Response } from 'express';
import user from '../service/user';
import * as bcrypt from "bcrypt";
import { BasicUser } from '../models/user.interface';
import jwt from 'jsonwebtoken';

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
            const username: string = req.body.username;
            const password: string = req.body.password;

            const user = await UserService.findUser(username) as Array<BasicUser>;

            if(!password) {
                res.json({sucess: false});
            }

            //Will be update use bcrypt to hash password comparison
            if(user[0].password = password) {
                const token = jwt.sign({username: username}, process.env.ACCESS_TOKEN_SERECT as string, {
                    expiresIn: "120s"
                });

                res.cookie('jwt', token, {httpOnly: true});
                res.json({sucess: true});
            }
            
        } catch(err) {
            console.log('controller', err);
        }
    };

}

export default new UserController()