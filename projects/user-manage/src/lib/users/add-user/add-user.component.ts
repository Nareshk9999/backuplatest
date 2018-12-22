import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import{MaterialModule} from '../../shared/material.module'
import { MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'user-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [{
    provide:  MAT_STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddUserComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // thridFromGroup:FormGroup;
  toppings = new FormControl();
  toppingList: string[] = ['Hp Accountmanager', 'HPSoftwareTesting', 'Accountmanager', 'Accountmanager', 'HPSoftwareTesting', 'HPSoftwareTesting'];
  securityModel = new FormControl();
  securityModelList: string[] = ['SM1', 'SM2', 'SM3', 'SM4', 'SM5'];
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }

}






