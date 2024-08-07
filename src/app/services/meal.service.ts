import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }

  getMealsByCategory(category: string): Observable<any> {
    const params = new HttpParams().set('c', category)
    return this.http.get(`${this.baseUrl}/filter.php`, { params });
  }

  searchMealsByName(name: string): Observable<any> {
    const params = new HttpParams().set('s', name)
    return this.http.get(`${this.baseUrl}/search.php`, { params });
  }

  getMealDetails(id: string): Observable<any> {
    const params = new HttpParams().set('i', id)
    return this.http.get(`${this.baseUrl}/lookup.php`, { params });
  }
}
