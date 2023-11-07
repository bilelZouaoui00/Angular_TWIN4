import { Component,OnInit  } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  items: any[] = [];
  listUsers:User[] = [];

  categoryfilter: string = ''; // Propriété de filtre par catégorie
  userS: any;

  constructor(private dataService: DataService,private http: HttpClient) {}

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe(data => this.listUsers = data);
  }
  isAdmin(item : any): boolean {
    return item.accountCategory  == 'Admin';
  }

  deleteUser(index: number): void {
    this.items.splice(index, 1);
  }


}
