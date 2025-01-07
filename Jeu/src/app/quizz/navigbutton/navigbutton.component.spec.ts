import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigbuttonComponent } from './navigbutton.component';

describe('NavigbuttonComponent', () => {
  let component: NavigbuttonComponent;
  let fixture: ComponentFixture<NavigbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
