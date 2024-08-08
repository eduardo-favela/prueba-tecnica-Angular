import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MealService } from './meal.service';

describe('MealService', () => {
  let service: MealService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MealService]
    });
    service = TestBed.inject(MealService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch meals by name', () => {
    const dummyMeals = {
      meals: [
        { strMeal: 'Meal 1', strMealThumb: 'thumb1.jpg', strCategory: 'Category 1' },
        { strMeal: 'Meal 2', strMealThumb: 'thumb2.jpg', strCategory: 'Category 2' }
      ]
    };

    service.searchMealsByName('Meal').subscribe(meals => {
      expect(meals.meals.length).toBe(2);
      expect(meals.meals).toEqual(dummyMeals.meals);
    });

    const req = httpMock.expectOne(`${service['baseUrl' as keyof MealService]}/search.php?s=Meal`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMeals);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
