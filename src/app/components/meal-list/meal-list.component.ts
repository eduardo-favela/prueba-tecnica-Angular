import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawMeal } from '../../Interfaces/meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent {
  @Input() meals: RawMeal[] = [];

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
