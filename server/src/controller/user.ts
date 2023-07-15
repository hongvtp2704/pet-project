import {UserService} from '../service';

class UserController {
 getAllUsers = ()=> {
  try{
   return UserService.getAllUsers();
  }catch (err){
   console.log('controller',err)
  }

 }
}

export default new UserController()