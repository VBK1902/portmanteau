import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LeftcompComponent } from './leftcomp/leftcomp.component';
import { RightcompComponent } from './rightcomp/rightcomp.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LeftcompComponent,
    RightcompComponent,
    LogincompComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
