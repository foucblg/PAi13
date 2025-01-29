import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEndpageComponent } from './quiz-endpage.component';

describe('QuizEndpageComponent', () => {
  let component: QuizEndpageComponent;
  let fixture: ComponentFixture<QuizEndpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizEndpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizEndpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
