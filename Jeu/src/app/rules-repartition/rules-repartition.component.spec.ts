import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRepartitionComponent } from './rules-repartition.component';

describe('RulesRepartitionComponent', () => {
  let component: RulesRepartitionComponent;
  let fixture: ComponentFixture<RulesRepartitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesRepartitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesRepartitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
