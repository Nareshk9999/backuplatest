import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserManageComponent } from './user-manage.component';
import { AuthComponent } from './auth/auth.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{UserManageRoutingModule} from './user-manage-routing.module'

import{MaterialModule} from './shared/material.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { SecurityModelsComponent } from './security-models/security-models.component';
// import { AddSecurityComponent } from './securitymodel/add-security/add-security.component';
import { PrivilageComponent } from './privilage/privilage.component';
import { ResourceComponent } from './resource/resource.component';
import{AddUserComponent } from './users/add-user/add-user.component'
@NgModule({
  declarations: [
    UserManageComponent,
     AuthComponent, 
     HomeComponent, 
    NavbarComponent, UsersComponent, RolesComponent, SecurityModelsComponent,  PrivilageComponent, ResourceComponent,AddUserComponent ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    FormsModule,
    BrowserModule,
    MaterialModule,
     UserManageRoutingModule
 
  ],
  exports: [UserManageComponent, AuthComponent,HomeComponent,NavbarComponent],
  providers: [
    // CookieService,
    // { provide: CookieOptions, useValue: {} },
   
  ],
  entryComponents: [],
})
export class UserManageModule { }
