import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListComponent } from './meal-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MealService } from '../../services/meal.service';
import { ScrollPanelModule } from 'primeng/scrollpanel';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealListComponent],
      imports: [HttpClientTestingModule, ScrollPanelModule],
      providers: [
        MealService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
            snapshot: {
              paramMap: {
                get: (key: string) => '123'
              }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
