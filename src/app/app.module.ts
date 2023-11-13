import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { MainInvoiceComponent } from './Invoice/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Invoice/invoice/invoice.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { ListProduitsComponent } from './list-produits/list-produits.component';



@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    CardComponent,
    ListFournisseurComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    ListProduitsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
