import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Meal, RawMeal } from '../Interfaces/meal';

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
    return this.http.get(`${this.baseUrl}/lookup.php`, { params }).pipe(
      map(response => (response as any).meals.map(this.transformMeal))
    );
  }


  private transformMeal(meal: RawMeal): Meal {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof RawMeal];
      const measure = meal[`strMeasure${i}` as keyof RawMeal];

      if ((ingredient && ingredient.trim()) && (measure && measure.trim())) {
        ingredients.push(`${ingredient} ${measure}`);
      }
    }

    return {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strDrinkAlternate: meal.strDrinkAlternate,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
      strInstructions: meal.strInstructions,
      strMealThumb: meal.strMealThumb,
      strTags: meal.strTags,
      strYoutube: meal.strYoutube,
      ingredients,
      strSource: meal.strSource,
      strImageSource: meal.strImageSource,
      strCreativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
      dateModified: meal.dateModified,
    };
  }
}
