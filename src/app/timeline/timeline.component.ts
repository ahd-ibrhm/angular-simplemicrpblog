import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {Post} from './Post';
@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  title="Timeline";
  newMessage:string = "";
  newPosts : Post[]=[];
  charLimit: number=280;
  charsRemaining:number=280;
  user =new User("ahd-ibrhm","Ahmad Ibrahim","../assets/images/avatar.jpg");

  addPost () {
    if(this.newMessage.length!==0 && this.newMessage.length < this.charLimit ){
      this.newPosts.push({
        id:this.newPosts.length+1,
        user:this.user,
        message: this.newMessage,
        timeStamp:new Date()
      });
    }

  }

  deletePost (id:number) {
    this.newPosts = this.newPosts.filter((v, i) => i !== id);
  }


  onKey(charlength: number) {
    this.charsRemaining =  this.charLimit - charlength;
    return;
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
