/***********************************
 * Copyright (c) 2018 Genpact Headstrong Capital Markets.  All Rights Reserved.
 ***********************************/
import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from "./users/users.component";
import { RolesComponent } from "./roles/roles.component";
import { SecurityModelsComponent } from './security-models/security-models.component';
import { PrivilageComponent } from './privilage/privilage.component';
import { ResourceComponent } from './resource/resource.component';
import { AddUserComponent } from './users/add-user/add-user.component';


const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'securityModels', component: SecurityModelsComponent },
  { path: 'privilage', component: PrivilageComponent },
  { path: 'resource', component: ResourceComponent },  
  { path: 'users/addUser', component: AddUserComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // otherwise redirect to home   useHash: false,
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class UserManageRoutingModule {}
