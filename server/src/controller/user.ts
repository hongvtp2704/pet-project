import {UserService} from '../service';

class UserController {
 getAllUsers = ()=> {
  try{
   return UserService.getAllUsers();
  }catch (err){
   console.log(err)
  }

 }
}

export default new UserController()