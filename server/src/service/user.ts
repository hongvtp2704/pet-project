import { poolPromise } from '../config/database';

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
        const [rows, fields] = await poolPromise.query("SELECT * FROM users WHERE username = ?",[username]);
        console.log(rows);
        console.log(fields);

        return [rows, fields];
    } catch(err) {
        return err;
    }
 };

}

export default new UserService()
