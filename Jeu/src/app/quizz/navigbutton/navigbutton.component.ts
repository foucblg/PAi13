import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigbutton',
  standalone: true,
  imports: [],
  templateUrl: './navigbutton.component.html',
  styleUrl: './navigbutton.component.css'
})
export class NavigbuttonComponent {
  @Input() Avance!: any;
  

}
