import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { navigation_data } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CardnumService {
  private currentNumberSource = new BehaviorSubject<number>(0);
  currentNumber$ = this.currentNumberSource.asObservable();

  private catSource = new BehaviorSubject<string>('');
  cat$ = this.catSource.asObservable();

  constructor() {}

}
