import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import jsonDataUser from '../../data/user.json'; // Import the JSON file as a module
import jsonDataProduct from '../../data/produits.json'; // Import the JSON file as a module
import { Product } from 'src/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductData {
  listProducts: Product[] = [];

  constructor() { }

  getData(): Observable<any[]> {
    return of(jsonDataUser);
  }

  getDataProduct(): Observable<any[]> {
    return of(jsonDataProduct);
  }

  getAllProducts(): Product[] {
    return [
      { id: 1, code: 127, libelle: "PC", prixunitaire: 2000, tauxTva: 10 },
      { id: 2, code: 128, libelle: "TV", prixunitaire: 1000, tauxTva: 20 },
      { id: 3, code: 128, libelle: "Table", prixunitaire: 200, tauxTva: 30 },
      { id: 3, code: 128, libelle: "Produit1", prixunitaire: 200, tauxTva: 30 },
    ];
  }
  getAllProductsFromFile(): Product[] {
    return [
      { "id": 1, code: 123, "libelle": "Produit1", prixunitaire: 12.5, "tauxTva": 0.02 },
      { "id": 2, code: 213, "libelle": "Produit2", prixunitaire: 30, "tauxTva": 0.1980 },
      { "id": 3, code: 212, "libelle": "Produit3", prixunitaire: 20, "tauxTva": 0.1980 },
      { "id": 4, code: 333, "libelle": "Produit4", prixunitaire: 50, "tauxTva": 0.1980 },
      { "id": 5, code: 212, "libelle": "Produit1", prixunitaire: 70, "tauxTva": 0.02 }
    ];
  }

  getNbProductsByLibelle(libelle: string): number {
    return this.getAllProductsFromFile().filter(product => product.libelle === libelle).length;
  }

}
