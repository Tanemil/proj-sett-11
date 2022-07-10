import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users/users.page';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  }
];

@NgModule({
  declarations: [
    UsersPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
