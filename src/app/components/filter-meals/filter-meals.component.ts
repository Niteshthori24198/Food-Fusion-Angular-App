import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
@Component({
  selector: 'app-filter-meals',
  templateUrl: './filter-meals.component.html',
  styleUrls: ['./filter-meals.component.css'],
})
export class FilterMealsComponent {
  @Input() meal: any;
  categoryMeals: any[] = [];
  param: any;
  constructor(private route: ActivatedRoute, private menuService: MenuService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const param = params.get('category') as string;
      console.log(params);
      this.param = param;
      this.menuService.getFilter(param).subscribe(
        (data) => {
          console.log(data);
          this.categoryMeals = data.meals;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
    });
  }
}
