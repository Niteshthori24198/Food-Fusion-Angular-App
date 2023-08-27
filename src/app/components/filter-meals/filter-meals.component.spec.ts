import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMealsComponent } from './filter-meals.component';

describe('FilterMealsComponent', () => {
  let component: FilterMealsComponent;
  let fixture: ComponentFixture<FilterMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMealsComponent]
    });
    fixture = TestBed.createComponent(FilterMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
