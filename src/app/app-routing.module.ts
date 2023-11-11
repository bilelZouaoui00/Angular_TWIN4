import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Invoice/invoice/invoice.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: UserComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'invoiceList', component: InvoiceListComponent },
  { path: 'invoice/:id/:active', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
