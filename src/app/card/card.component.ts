import { Component,OnInit  } from '@angular/core';
import { ProductData } from 'src/app/services/ProductData.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  items: any[] = [];

  categoryfilter: string = ''; // Propriété de filtre par catégorie

  constructor(private dataService: ProductData) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.items = data;
    });
  }

  isAdmin(item : any): boolean {
    return item.accountCategory  == 'Admin';
  }

  deleteUser(index: number): void {
    this.items.splice(index, 1);
  }


}
