import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import{UserManageModule} from 'projects/user-manage/src/lib/user-manage.module';

;
 
 @NgModule({
  declarations: [
    AppComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     UserManageModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
