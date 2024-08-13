import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent implements ControlValueAccessor {
  @Input('input-class') inputClass!: string;
  @Input('input-name') inputName!: string;
  @Input('label-class') labelClass!: string;
  @Input('span-class') spanClass!: string;
  @Input('label') label!: string;
  @Input('value') value!: string;


  currentValue!: string;

  onChange: any = (value: any) => { };
  onTouched: any = () => { };


  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.currentValue = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void { }


}
