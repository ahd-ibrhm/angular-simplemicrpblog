import {User} from './User';
export class Post{
  //fields
  id:number;
  message:string;
  timeStamp:Date;
  user:User;


  //constructor
  constructor(id:number,message:string,timeStamp:Date,user:User) {
    this.id = id;
    this.message=message;
    this.timeStamp=timeStamp;
    this.user=new User(user.username,user.real_name,user.avatar)
  }

}
