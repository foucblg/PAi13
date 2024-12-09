import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfCardComponent } from './tf-card.component';

describe('TfCardComponent', () => {
  let component: TfCardComponent;
  let fixture: ComponentFixture<TfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TfCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
