import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { MainInvoiceComponent } from './Invoice/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Invoice/invoice/invoice.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
