import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCMCardComponent } from './qcm-card.component';

describe('QCMCardComponent', () => {
  let component: QCMCardComponent;
  let fixture: ComponentFixture<QCMCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QCMCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QCMCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
