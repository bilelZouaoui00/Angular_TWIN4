import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/model/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  idFournisseur: string;
  code: string;
  libelle: string;
  hidden: boolean = false;
  ListFournisseur : Fournisseur[];

  constructor() {
    this.idFournisseur = '123';
    this.code = 'ABC';
    this.libelle = 'Fournisseur XYZ';
    this.ListFournisseur =[
      {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"}
      ];


  }

  removeFournisseur(fournisseur: Fournisseur) {
    const index = this.ListFournisseur.indexOf(fournisseur);
    if (index !== -1) {
      this.ListFournisseur.splice(index, 1);
    }
  }



  ngOnInit(): void {
    this.hidden=false;
  }

}
