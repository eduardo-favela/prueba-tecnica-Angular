import { Component } from '@angular/core';
import { Meal } from '../../Interfaces/meal';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.css'
})
export class MealDetailsComponent {

  meal!: Meal;

  constructor(private route: ActivatedRoute, private mealService: MealService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mealService.getMealDetails(id).subscribe(data => {
        this.meal = data.meals[0];
      });
    }
  }
}
