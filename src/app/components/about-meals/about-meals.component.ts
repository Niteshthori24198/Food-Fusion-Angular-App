import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-about-meals',
  templateUrl: './about-meals.component.html',
  styleUrls: ['./about-meals.component.css'],
})
export class AboutMealsComponent implements OnInit {
  meal: any = {};
  constructor(
    private router: ActivatedRoute,
    private menuService: MenuService
  ) {}
  generateLoopArray(count: number): number[] {
    return new Array(count).fill(0);
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const param = params.get('about') as string;
      this.menuService.getMealById(param).subscribe(
        (data) => {
          this.meal = data.meals[0];
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
    });
  }
}
