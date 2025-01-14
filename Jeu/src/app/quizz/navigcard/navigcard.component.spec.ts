import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigcardComponent } from './navigcard.component';

describe('NavigcardComponent', () => {
  let component: NavigcardComponent;
  let fixture: ComponentFixture<NavigcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
