import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.address={
      street: "Tinderella Road",
      city: "Gothem",
      state:"Non Of YOUR Business",
      zip:895,
    };
    this.hobbies = ["looking at cats", "trying all my furries..."];
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

