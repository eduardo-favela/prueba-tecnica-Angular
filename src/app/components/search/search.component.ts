import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../Interfaces/meal';
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

  constructor(private mealService: MealService, private router: Router, private messageService: MessageService) { }

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

  searchMeals(): void {
    if (this.searchInput) {
      this.router.navigate(['/index'], { queryParams: { name: this.searchInput } });
    } else if (this.selectedCategory) {
      this.router.navigate(['/index'], { queryParams: { category: this.selectedCategory } });
    }
  }
}
