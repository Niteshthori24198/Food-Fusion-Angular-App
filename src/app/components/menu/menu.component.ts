import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  categories: any[] = [];
  filteredMeals: any[] = [];
  constructor(private menuservice: MenuService) {}
  ngOnInit(): void {
    this.menuservice.getCategories().subscribe(
      (data) => {
        console.log(data);
        this.categories = data.categories;
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }
}
