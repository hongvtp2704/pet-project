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
}

export default new UserService()
