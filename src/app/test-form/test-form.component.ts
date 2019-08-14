import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TestFormService} from '../service/test-form.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  testForm: FormGroup;
  genderValue = [
    {id: 0, value: 'female'},
    {id: 1, value: 'male'}];

  colorPalette = ['#55acee','#cbca94','#008080'];

  constructor(private fb: FormBuilder,
              private formService: TestFormService) { }

  ngOnInit() {
    this.testForm = this.formService.testForm;
  }
}
