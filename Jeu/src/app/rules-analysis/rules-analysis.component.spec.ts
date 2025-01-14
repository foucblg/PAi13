import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAnalysisComponent } from './rules-analysis.component';

describe('RulesAnalysisComponent', () => {
  let component: RulesAnalysisComponent;
  let fixture: ComponentFixture<RulesAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
