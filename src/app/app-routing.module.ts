import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'f', redirectTo: '/f', pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'f', component: FournisseurComponent },
  { path: 'produits', component: ListProduitsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
