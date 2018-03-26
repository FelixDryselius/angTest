import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = "Felix";
  age:number = 55;
  address:Address;
  hobbies:string[];
  posts:Posts[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.address={
      street: "Tinderella Road",
      city: "Gothem",
      state:"Non Of YOUR Business",
      zip:895,
    };
    this.hobbies = ["looking at cats", "trying all my furries..."];
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;   
    });
  
  }

  onClick(){
    console.log("lololololol");
    this.hobbies.push("Olja Oh olja");
    
  }

  addHobby(hobby){
  console.log("addHobby() runned with value:");
  console.log(hobby);
  this.hobbies.unshift(hobby)
  return false;     
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,hobby.length);
      }
    }
    
  }

}


interface Address{
  street:string,
  city:string,
  state:string,
  zip:number,
}

interface Posts{
  id: number,
  title: string,
  body: string,
  userId: number,
}
