import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDetailsComponent } from './meal-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';

describe('MealDetailsComponent', () => {
  let component: MealDetailsComponent;
  let fixture: ComponentFixture<MealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealDetailsComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ToastModule, DialogModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
