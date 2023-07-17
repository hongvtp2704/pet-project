import { poolPromise } from '../config/database';
import user from '../controller/user';

class UserService {
 getAllUsers = async () => {
  try{
   console.log("service")
   const result = await poolPromise.query("SELECT * FROM users");
   console.log(result);
   return result;
  }catch (err){
   console.log('service',err)
  }
 };
 
 findUser = async (username: string) => {
    try {
        const [rows, fields] = await poolPromise.query("SELECT username, pass as password FROM users WHERE username = ?",[username]);
        return rows;
    } catch(err) {
        return err;
    }
 };

 createUser = async(username: string, password: string) => {
    try {
        await poolPromise.query("INSERT INTO users (username, pass, Created_at, Updated_at) VALUES (?,?,?,?)", 
                                [username, password, new Date(), new Date()]);
        
        return true;
    } catch(err) {
        console.log("User Controller", err);
        return false;
    }
 }
}



export default new UserService();
