import {pool, poolPromise} from '../database/config';
import { BasicUser, User } from '../models/user.interface';
import { OkPacket, RowDataPacket } from 'mysql2';


export const Create = async (user: User) => {
    const queryString = "INSERT INTO User (id, username, password) VALUES (?, ?, ?)";
    try {
        const re = await pool.query( 
                        queryString,
                        [user.id, user.password, user.username] );
        
        console.log(re);   
        return re;

        } catch(err) {
            console.log(err);
            return err;
        }       
}

export const Login = async (user: BasicUser) => {
    const querryString = 'SELECT * FROM USERS WHERE USERS.USERNAME =?'
                         'AND USER.PASSWORD= ?';
    try {
        const account = await pool.query(
            querryString,
            [user.username, user.password] );
        
        console.log(account);
        return account;
    } catch(err) {
        return err;
    }           
}

