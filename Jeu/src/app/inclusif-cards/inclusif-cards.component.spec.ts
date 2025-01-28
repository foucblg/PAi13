import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusifCardsComponent } from './inclusif-cards.component';

describe('InclusifCardsComponent', () => {
  let component: InclusifCardsComponent;
  let fixture: ComponentFixture<InclusifCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InclusifCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclusifCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
