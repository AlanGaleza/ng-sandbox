import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TestFormService {

  constructor(private fb: FormBuilder) {
  }

  testForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    gender: ['', Validators.required],
    color: ['']
  });
}
