import { poolPromise } from '../config/database';

class UserService {
 getAllUsers = async () => {
  try{
   const result = await poolPromise.query("SELECT * FROM users");
   console.log(result);
   return result;
  }catch (err){
   console.log(err)
  }
 };
}

export default new UserService()
