import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMealsComponent } from './about-meals.component';

describe('AboutMealsComponent', () => {
  let component: AboutMealsComponent;
  let fixture: ComponentFixture<AboutMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMealsComponent]
    });
    fixture = TestBed.createComponent(AboutMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
