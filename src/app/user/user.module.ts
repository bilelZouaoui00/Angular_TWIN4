import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [SharedModule,UserRoutingModule],
})
export class UserModule { }
