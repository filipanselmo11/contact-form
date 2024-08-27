import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input('button-class') buttonClass!:string;
  @Output('button-click') buttonClick = new EventEmitter();

  handleButtonClick() {
    this.buttonClick.emit();
  }
}
