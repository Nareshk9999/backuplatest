import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityModelsRoutingModule } from './security-models-routing.module';
import { AddSecurityComponent } from './add-security/add-security.component';


@NgModule({
  declarations: [AddSecurityComponent],
  imports: [
    CommonModule,
    SecurityModelsRoutingModule
  ]
})
export class SecurityModelsModule { }
