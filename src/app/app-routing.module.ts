import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Invoice/invoice/invoice.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account', component: CardComponent },
  { path: 'produits', component: ListProduitsComponent },
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
