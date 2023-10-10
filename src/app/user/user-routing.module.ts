import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  //we delete to delete routes in app.routing and we put here
  //And we add pathcMatch:"full" in the bigin
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path:"users", component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
