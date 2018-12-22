import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatStepperModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UsersModule { }
