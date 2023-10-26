import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MainInvoiceComponent } from './Invoice/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Invoice/invoice/invoice.component';
import { User } from '../model/user.model';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  // { path: 'invoice', component: MainInvoiceComponent },
  { path: 'invoiceList', component: InvoiceListComponent },
  { path: 'invoice/:id/:active', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },//is for ?param
  { path: 'users', component: UserComponent },//is for ?param

  //we add here the children module :
  // {path:'users',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
