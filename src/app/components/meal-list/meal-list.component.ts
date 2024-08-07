import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../Interfaces/meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent {
  meals: Meal[] = [];

  constructor(private route: ActivatedRoute, private mealService: MealService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.mealService.searchMealsByName(params['name']).subscribe(data => {
          this.meals = data.meals;
        });
      } else if (params['category']) {
        this.mealService.getMealsByCategory(params['category']).subscribe(data => {
          this.meals = data.meals;
        });
      }
    });
  }
}
