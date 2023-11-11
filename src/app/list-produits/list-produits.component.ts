import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProductData } from 'src/service/ProductData.service';


@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {


  items: any[] = [];
  codeRecherche: string = '';
  categoryfilter: string = ''; // Propriété de filtre par catégorie
  produitRecherche: any = null;
  // Propriété pour le nouveau produit
  produitForm: FormGroup; // declaration of the form group

  constructor(private dataService: ProductData, private fb: FormBuilder) {
    // Initialize the form group in the constructor
    this.produitForm = this.fb.group({
      idProduit: [],
      code: [''],
      libelle: [''],
      prixUnitaire: [],
      tauxTVA: []
    });
  }

  ngOnInit(): void {
    this.dataService.getDataProduct().subscribe((data) => {
      this.items = data;
    });

  }

  isAdmin(item: any): boolean {
    return item.accountCategory == 'Admin';
  }

  deleteUser(index: number): void {
    this.items.splice(index, 1);
  }

  AjusterTVA(item: any) {
    item.boutonClique = true;
    item.tauxTVA = 0.02;
  }

  rechercherProduit() {
    this.produitRecherche = this.items.find((item) => item.code === this.codeRecherche);
    this.items = this.produitRecherche;
  }

  ajouterProduit() {
    // Ajoutez le nouveau produit à la liste items
    const nouveauProduit = this.produitForm.value;
    console.log(nouveauProduit);
    this.items.push(nouveauProduit);
    // Réinitialisez le formulaire a vide
    this.produitForm.reset();

  }






}
