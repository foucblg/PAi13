import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeIndicatorComponent } from './theme-indicator.component';

describe('ThemeIndicatorComponent', () => {
  let component: ThemeIndicatorComponent;
  let fixture: ComponentFixture<ThemeIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
