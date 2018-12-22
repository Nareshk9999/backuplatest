import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { AddResourceComponent } from './add-resource/add-resource.component';

@NgModule({
  declarations: [AddResourceComponent],
  imports: [
    CommonModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
