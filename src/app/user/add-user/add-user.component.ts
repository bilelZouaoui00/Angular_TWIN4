import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  //add user json data
  // myUser?=null;

  // constructor ( private  userService:UserService ,private R:Router ){}

  // add(){s
  //   this.userService.addUser(this.myUser).subscribe(()=>alert('added User successfully')
  //     this.R.navigate(['']));
  //   )
  // }

}
