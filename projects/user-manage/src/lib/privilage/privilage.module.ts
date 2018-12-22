import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilageRoutingModule } from './privilage-routing.module';
import { AddPrivilageComponent } from './add-privilage/add-privilage.component';

@NgModule({
  declarations: [AddPrivilageComponent],
  imports: [
    CommonModule,
    PrivilageRoutingModule
  ]
})
export class PrivilageModule { }
