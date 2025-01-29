import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesSolutionsComponent } from './rules-solutions.component';

describe('RulesSolutionsComponent', () => {
  let component: RulesSolutionsComponent;
  let fixture: ComponentFixture<RulesSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
