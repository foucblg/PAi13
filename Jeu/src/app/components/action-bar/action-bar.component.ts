import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {
  @Input() buttons: { label: string, action: () => void, icon?: string }[] = [];
}
