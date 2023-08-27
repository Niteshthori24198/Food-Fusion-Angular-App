import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiURL = 'https://www.themealdb.com/api/json/v1/1';
  // for all category = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  // for list of category = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  // for filter = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous';
  constructor(private http:HttpClient) {}
  public getCategories(): Observable<any> {
    return this.http.get(`${this.apiURL}/categories.php`);
  }
  public getCategoryList(): Observable<any> {
    return this.http.get(`${this.apiURL}/list.php?c=list`);
  }
  public getFilter(category: string): Observable<any> {
    return this.http.get(`${this.apiURL}/filter.php?c=${category}`);
  }
  public getMealById(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/lookup.php?i=${id}`);
  }
}
