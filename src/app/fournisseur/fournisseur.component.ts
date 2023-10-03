import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.idFournisseur = '123';
    this.code = 'ABC';
    this.libelle = 'Fournisseur XYZ';
  }


  ngOnInit(): void {
    this.hidden=false;
  }

}
