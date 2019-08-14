import {Component, Input} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ColorPickerComponent, multi: true},
    {provide: NG_VALIDATORS, useExisting: ColorPickerComponent, multi: true}
  ]
})
export class ColorPickerComponent implements ControlValueAccessor, Validator {

  constructor() { }

  @Input() colors: string[] = [];
  selectedColor: string;
  onChange: string;

  selectColor(color: string) {
    this.selectedColor = color;
    console.log(color);
    this.onChange = color;
  }

  writeValue(obj: any): void {
    this.selectedColor = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.selectedColor) {
      return {'required': 'Please choose a color.'};
    }
    return null;
  }
}
