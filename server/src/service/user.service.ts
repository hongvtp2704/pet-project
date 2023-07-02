import {pool, poolPromise} from '../database/config';
import { BasicUser, User } from '../models/user.interface';
import { OkPacket, RowDataPacket } from 'mysql2';

export const Create = (user: User) => {
    const queryString = "INSERT INTO User (id, username, password) VALUES (?, ?, ?)";
    poolPromise.query( 
            queryString,
            [user.id, user.password, user.username] )
            .then( ()=> {
                return {
                    sucess: true
                }
            })
            .catch((err)=> {
                return {
                    success: false,
                    error: err
                }
            })
}

export const Login = (user: BasicUser) => {
    const querryString = 'SELECT * FROM USERS WHERE USERS.USERNAME =?'
                         'AND USER.PASSWORD= ?';

        poolPromise.query(
            querryString,
            [user.username, user.password] )
            .then((result)=> {
                const row = (<RowDataPacket> result)[0];
                console.log(row);  
            })
            .catch((err)=> {
                console.log(err);
            })
}

