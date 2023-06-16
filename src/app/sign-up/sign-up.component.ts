import { Component } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private userData:UsersService){}

  getAPIData(data:any){
    this.userData.postData(data).subscribe((result)=>{
      console.log(result)
     
    })
  }

}
