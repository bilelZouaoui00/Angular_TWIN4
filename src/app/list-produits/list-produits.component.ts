import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/service/data.service';


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

    // Propriété pour stocker les détails du nouveau produit
    nouveauProduit: any = {
      idProduit: 0,      // Assuming idProduit is an integer
      code: '',          // Assuming code is a string
      libelle: '',      // Assuming libelle is a floating-point number
      prixUnitaire: 0.0, // Assuming prixUnitaire is a floating-point number
      tauxTVA: 0.0       // Assuming tauxTVA is a floating-point number
    };



  constructor(private dataService: DataService) { }

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
    item.tauxTVA=0.02;
  }

  // Méthode pour rechercher un produit par code
  rechercherProduit() {
    this.produitRecherche = this.items.find((item) => item.code === this.codeRecherche);
    this.items = this.produitRecherche;
  }

  ajouterProduit() {
    // Ajoutez le nouveau produit à la liste items
    this.items.push(this.nouveauProduit);

    // Réinitialisez le formulaire en créant un nouvel objet vide
    this.nouveauProduit = {
      idProduit: null,
      code: '',
      libelle: '',
      prixUnitaire: null,
      tauxTVA: null,
    };
  }






}
