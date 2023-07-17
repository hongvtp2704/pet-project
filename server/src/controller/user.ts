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
            const match = await bcrypt.compare(password as string, user[0].password as string);
            if(match) {
                const token = jwt.sign({username: username}, process.env.ACCESS_TOKEN_SERECT as string, {
                    expiresIn: "120s"
                });

                res.cookie('jwt', token, {httpOnly: true});
                res.json({sucess: true});
            }
            
        } catch(err) {
            console.log('login controller', err);
        }
    };

    create =  (req: Request, res: Response) => {
        const username = req.body.username;
        const password = req.body.password;


        bcrypt.genSalt(10, function (err, salt) {
            console.log("Gensalt Err", err);
            bcrypt.hash(password, salt, async function(err, hash) {
                console.log("Hash Err", err);
                console.log(hash);
            try {  
                
                const re= await UserService.createUser(username, hash);
                res.json({sucess: re});
            } catch(err) {
                res.json({sucess: false});
                console.log(err);
            }

            })
        });
    }

}

export default new UserController()