import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    //we de late the component in app.module and we put it here
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
