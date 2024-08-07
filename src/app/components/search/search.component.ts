import { Component } from '@angular/core';
import { Category, RawMeal } from '../../Interfaces/meal';
import { MealService } from '../../services/meal.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [MessageService]
})
export class SearchComponent {
  categories: Category[] = [];
  searchInput: string = '';
  selectedCategory: Category | null = null;
  loading: boolean = false;

  meals: RawMeal[] = [];

  constructor(private mealService: MealService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.loading = true;
    let catResponse: any;
    this.mealService.getCategories().subscribe({
      next: (catRes: any) => {
        catResponse = catRes;
      },
      error: (error: any) => {
        this.loading = false
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error, sticky: true, closable: true });
      },
      complete: () => {
        this.loading = false;
        if (catResponse.categories) {
          this.categories = catResponse.categories;
        }
      }
    })
  }

  searchMeals(searchType: string): void {
    this.meals = [];
    this.loading = true
    let mealResponse: any;
    if (searchType === 'category') {
      if (this.selectedCategory) {
        this.searchInput = '';
        this.mealService.getMealsByCategory(this.selectedCategory.strCategory).subscribe({
          next: (mealRes: any) => {
            mealResponse = mealRes;
          },
          error: (error: any) => {
            this.loading = false
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error, sticky: true, closable: true });
          },
          complete: () => {
            this.loading = false;
            if (mealResponse.meals) {
              this.meals = mealResponse.meals;
            }
          }
        })
      }
      else {
        this.loading = false;
      }
    }
    else if (searchType === 'mealName') {
      this.selectedCategory = null;
      if (this.searchInput !== '') {
        this.mealService.searchMealsByName(this.searchInput).subscribe({
          next: (mealRes: any) => {
            mealResponse = mealRes;
          },
          error: (error: any) => {
            this.loading = false
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error, sticky: true, closable: true });
          },
          complete: () => {
            this.loading = false;
            if (mealResponse.meals) {
              this.meals = mealResponse.meals;
            }
          }
        })
      }
      else {
        this.loading = false;
        this.meals = []
      }
    }
    /*
    PUEDE SERVIR PARA EL HISTORIAL
    if (this.searchInput) {
      this.router.navigate(['/index'], { queryParams: { name: this.searchInput } });
    } else if (this.selectedCategory) {
      this.router.navigate(['/index'], { queryParams: { category: this.selectedCategory } });
    } */
  }
}
