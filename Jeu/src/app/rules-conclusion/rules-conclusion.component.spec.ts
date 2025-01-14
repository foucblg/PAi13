import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesConclusionComponent } from './rules-conclusion.component';

describe('RulesConclusionComponent', () => {
  let component: RulesConclusionComponent;
  let fixture: ComponentFixture<RulesConclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesConclusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
