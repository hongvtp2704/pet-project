import {UserService} from '../service';
import { Request, Response } from 'express';
import * as bcrypt from "bcrypt";
import { BasicUser } from '../models/user.interface';
import jwt from 'jsonwebtoken';

class UserController {
    getAllUsers =  async (req: Request, res: Response)=> {
        try{
            const users = await UserService.getAllUsers() as Array<BasicUser>;
            res.status(200).json(users);
        }catch (err){
            console.log('controller',err)
        }

    };

    login = async (req: Request, res: Response) => {
        try {
            const username: string = req.body.username;
            const password: string = req.body.password;

            const user = await UserService.findUser(username) as Array<BasicUser>;

            if(!user) {
                res.status(200).json({sucess: false, message: "Username not found"});
            }

            if(!password) {
                res.status(200).json({sucess: false, message: "Please provide password"});
            }

            //Will be update use bcrypt to hash password comparison
            const match = await bcrypt.compare(password as string, user[0].password as string);
            if(match) {
                const token = jwt.sign({username: username}, process.env.ACCESS_TOKEN_SERECT as string, {
                    expiresIn: "120s"
                });

                res.cookie('jwt', token, {httpOnly: true});
                res.status(200).json({sucess: true});
            } else {
                res.status(200).json({sucess: false, message: "Wrong Password"});
            }
            
        } catch(err) {
            console.log('login controller', err);

            res.status(200).json({success: false});
        }
    };

    create = async  (req: Request, res: Response) => {
        const username = req.body.username;
        const password = req.body.password;

        const user = await UserService.findUser(username) as Array<BasicUser>;

        console.log(!user);

        if(user[0]) {
            res.status(200).json({sucess: false, message: "Username existed"}); 
        }
        else {

        bcrypt.genSalt(10, function (err, salt) {
            console.log("Gensalt Err", err);
            bcrypt.hash(password, salt, async function(err, hash) {
                console.log("Hash Err", err);
            try {  
                
                const re= await UserService.createUser(username, hash);
                if(re) {
                    res.status(200).json({sucess: true});
                } else {
                    res.status(200).json({sucess: false})
                }
            } catch(err) {
                if(err) { res.status(200).json({sucess: false}); }
                console.log(err);
            }

            })
        });
    }
};

}

export default new UserController()