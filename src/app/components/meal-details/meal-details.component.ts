import { Component } from '@angular/core';
import { Meal } from '../../Interfaces/meal';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../../services/meal.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.css',
  providers: [MessageService]
})
export class MealDetailsComponent {

  meal: Meal | null = null;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private mealService: MealService, private messageService: MessageService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMealDetail(id);
    }
  }

  getMealDetail(id: string) {
    this.loading = true;
    let mealResponse: any;
    this.mealService.getMealDetails(id).subscribe({
      next: (mealRes: any) => {
        mealResponse = mealRes;
      },
      error: (error: any) => {
        this.loading = false
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error, sticky: true, closable: true });
      },
      complete: () => {
        this.loading = false;
        if (mealResponse.length > 0) {
          this.meal = mealResponse[0]
        }
      }
    });
  }
}
