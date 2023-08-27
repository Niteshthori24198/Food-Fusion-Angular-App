import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FoodFusionMenuApp';
  isAuthenticated: boolean = localStorage.getItem('token') ? true : false;
  ngOnInit(): void {
    this.isAuthenticated = localStorage.getItem('token') ? true : false;
  }
}
