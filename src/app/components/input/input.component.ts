import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type InputTypes = "email" | "text" | "password" | "radio" | "checkbox";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})


export class InputComponent implements ControlValueAccessor {

  @Input('input-name')inputName!: string;
  @Input('label-class')labelClass!: string;
  @Input('label-class-2')labelClass2!: string;
  @Input('label')label!: string;
  @Input('input-class')inputClass!: string;
  @Input('radio-value') radioValue!: string;
  @Input('span-class') spanClass!: string;
  @Input('input-type')inputType: InputTypes = "text";

  value!: string;
  currentValue!: string;

  onChange: any = () => { };
  onTouched: any = () => { };

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.onTouched();
  }

  onInputRadio(event: Event) {
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
