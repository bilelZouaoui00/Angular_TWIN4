import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [UserRoutingModule],
})
export class UserModule { }
